
function InsertDev() {
  return (
    <div>
      <label>
        <h6>Nome</h6>
        <input
          placeholder="Nome Completo"
        />
      </label>
      <label>
        <h6>Telefone Fixo</h6>
        <input
          placeholder="(DDD) XXXX-XXXX"
        />
      </label>
      <label>
        <h6>Telefone Celular</h6>
        <input
          placeholder="(DDD) X XXXX-XXXX"
        />
      </label>
      <label>
        <h6>CEP</h6>
        <input
          placeholder="12345-678"
        />
      </label>
        <h6>Linguagens</h6>
      <label>
        <input type="checkbox" id="lang1" name="lang1" value="JAVA"/>
        <label for="lang1"> JAVA </label>
        <br/>
        <input type="checkbox" id="lang2" name="lang2" value="PYTHON"/>
        <label for="lang2"> PYTHON </label>
        <br/>
        <input type="checkbox" id="lang3" name="lang3" value="JAVASCRIPT"/>
        <label for="lang3"> JAVASCRIPT</label>
        <br/>
        <input type="checkbox" id="lang4" name="lang4" value="GOLANG"/>
        <label for="lang4"> GOLANG</label>
        <br/>
        <input type="checkbox" id="lang5" name="lang5" value="CSHARP"/>
        <label for="lang5"> CSHARP</label>
        <br/>
        <input type="checkbox" id="lang6" name="lang6" value="ELIXIR"/>
        <label for="lang6"> ELIXIR</label>
        <br/>
     </label>
    </div>
  );
}

export default InsertDev;