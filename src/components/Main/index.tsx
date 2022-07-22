import { Container } from "./style";


export function Main() {
    return (
      <Container>
        <main>
          <div className="cadastro">
            <section>
                <h2>CADASTRO</h2>
            </section>
            <section>
                <p>Nome</p>
                <input type="text" />
                <p>E-mail</p>
                <input type="text" />
                <p>Nascimento</p>
                <input type="text" />
                <p>Telefone</p>
                <input type="text" />
            </section>
            <section>
                <button type="button">CADASTRAR</button>
            </section>
          </div>

          <div className="tabela">
            <table>
              <caption>LISTA DE CADASTRO</caption>
              <thead>
                <tr>
                  <th></th>
                  <th>NOME</th>
                  <th>E-MAIL</th>
                  <th>NASCIMENTO</th>
                  <th>TELEFONE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rawad</td>
                  <td>Rawad.aboultaif@hotmail.com</td>
                  <td>19/10/1991</td>
                  <td>(31)993670051</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </Container>  
    );
}