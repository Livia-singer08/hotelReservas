const API_QUARTO = "http://localhost:3000/quartos";
const API_RESERVA = "http://localhost:3000/reservas";
const params = new URLSearchParams(window.location.search);
const quartoId = params.get("id");

async function listarQuartos() {
    try {
        const res = await fetch(`${API_QUARTO}/listar`);
        const quartos = await res.json();
        const lista = document.getElementById("listaQuartos");
        lista.innerHTML = "";

        if (quartos.length === 0) {
            lista.innerHTML = "<tr><td colspan='3'>Nenhum quarto cadastrado</td></tr>";
            return;
        }

        quartos.forEach(q => {
            lista.innerHTML += `
        <tr>
          <td>${q.numero || q.numeroQuarto || ""}</td>
          <td>${q.tipo || q.tipoQuarto || ""}</td>
          <td>
            <button class="btn-ver" onclick="irParaReservas(${q.id})">Ver Reservas</button>
            <button class="btn-excluir" onclick="excluirQuarto(${q.id})">Excluir</button>
          </td>
        </tr>
      `;
        });
    } catch (erro) {
        console.error(erro);
        document.getElementById("listaQuartos").innerHTML = "<tr><td colspan='3'>Erro ao carregar</td></tr>";
    }
}

function abrirCadastroQuarto() {
    document.getElementById("modalQuarto").style.display = "flex";
}

function fecharModalQuarto() {
    document.getElementById("modalQuarto").style.display = "none";
}

async function cadastrarQuarto() {
    const numero = document.getElementById("numero").value.trim();
    const tipo = document.getElementById("tipo").value.trim();

    if (!numero) {
        alert("Informe o número do quarto");
        return;
    }

    try {
        await fetch(`${API_QUARTO}/cadastrar`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ numeroQuarto: numero, tipoQuarto: tipo })
        });
        fecharModalQuarto();
        listarQuartos();
    } catch (erro) {
        console.error(erro);
        alert("Erro ao cadastrar quarto");
    }
}

async function excluirQuarto(id) {
    if (!confirm("Deseja excluir?")) return;
    await fetch(`${API_QUARTO}/excluir/${id}`, { method: "DELETE" });
    listarQuartos();
}

function irParaReservas(id) {
    window.location.href = `reservas.html?id=${id}`;
}

async function listarReservas() {
    if (!quartoId) return;
    try {
        const quartoRes = await fetch(`${API_QUARTO}/buscar/${quartoId}`);
        const quarto = await quartoRes.json();
        document.getElementById("tituloQuarto").textContent = `Reservas do Quarto ${quarto.numero || quarto.numeroQuarto || ""}`;
        document.getElementById("tipoQuarto").textContent = `Tipo: ${quarto.tipo || quarto.tipoQuarto || ""}`;
        document.getElementById("infoQuarto").textContent = `${quarto.numero || quarto.numeroQuarto || ""} - ${quarto.tipo || quarto.tipoQuarto || ""}`;

        const reservasRes = await fetch(`${API_RESERVA}/listar`);
        const reservas = await reservasRes.json();
        const lista = document.getElementById("listaReservas");
        lista.innerHTML = "";

        const reservasDoQuarto = reservas.filter(r => Number(r.quartoId) === Number(quartoId));

        if (reservasDoQuarto.length === 0) {
            lista.innerHTML = "<tr><td colspan='5'>Nenhuma reserva cadastrada</td></tr>";
            return;
        }

        reservasDoQuarto.forEach(r => {
            lista.innerHTML += `
        <tr>
          <td>${r.id}</td>
          <td>${r.hospede || r.nome || ""}</td>
          <td>${r.dataEntrada || r.entrada || ""}</td>
          <td>${r.dataSaida || r.saida || ""}</td>
          <td><button class="btn-excluir" onclick="excluirReserva(${r.id})">Excluir</button></td>
        </tr>
      `;
        });
    } catch (erro) {
        console.error(erro);
        document.getElementById("listaReservas").innerHTML = "<tr><td colspan='5'>Erro ao carregar</td></tr>";
    }
}

function abrirCadastroReserva() {
    document.getElementById("modalReserva").style.display = "flex";
}

function fecharModalReserva() {
    document.getElementById("modalReserva").style.display = "none";
}

async function cadastrarReserva() {
    const hospede = document.getElementById("hospede").value.trim();
    const entrada = document.getElementById("entrada").value;
    const saida = document.getElementById("saida").value;

    if (!hospede || !entrada || !saida) {
        alert("Preencha todos os campos");
        return;
    }

    try {
        await fetch(`${API_RESERVA}/cadastrar`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                hospede: hospede,
                dataEntrada: entrada,
                dataSaida: saida,
                quartoId: Number(quartoId)
            })
        }).then(res => {
            console.log(res);
            return res.json();
        }).then(data => {
            console.log(data);
        });
        fecharModalReserva();
        listarReservas();
    } catch (erro) {
        console.error(erro);
        alert("Erro ao cadastrar reserva");
    }
}

async function excluirReserva(id) {
    if (!confirm("Deseja excluir?")) return;
    await fetch(`${API_RESERVA}/excluir/${id}`, { method: "DELETE" });
    listarReservas();
}

function voltarQuartos() {
    window.location.href = "index.html";
}

window.onload = () => {
    if (document.getElementById("listaQuartos")) listarQuartos();
    if (document.getElementById("listaReservas")) listarReservas();
};