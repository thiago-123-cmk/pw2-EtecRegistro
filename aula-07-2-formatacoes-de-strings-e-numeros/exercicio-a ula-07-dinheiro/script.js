
    const nome = window.prompt("Digite seu nome: ");
    const anoDeNascimento = Number(
      window.prompt("Digite seu ano de nascimento: "),
    );
    const cidade = window.prompt("Digite sua cidade: ");
    const salario = Number(window.prompt("Digite seu salário: "));

    document.write("<h3>Informações do Usuário: </h3>");
    document.write(`Seu nome é: ${nome}<br>`);
    document.write(`Sua idade é: ${2026 - anoDeNascimento}<br>`);
    document.write(
      `Sua cidade em letras maiúsculas é: ${cidade.toUpperCase()}<br>`,
    );
    document.write(
      `Seu salário formatado e convertido para dólar: ${(salario * 0.19).toLocaleString("en-US", { style: "currency", currency: "USD" })}<br>`,
    );
