describe("cipher", () => {

  it("should be an object", () => {
    assert.equal(typeof cipher, "object");
  });

  describe("cipher.encode", () => {

    it("should be a function", () => {
      assert.equal(typeof cipher.encode, "function");
    });

    it("should return \"HIJKLMNOPQRSTUVWXYZABCDEFG\"for \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" with offset 33", ()=> {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    //Teste para letras minúsculas

    it("should return \"hijklmnopqrstuvwxyzabcdefg\"for \"abcdefghijklmnopqrstuvwxyz\"with offset 33", () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });

    // Teste para caracteres não alfabéticos

    it("should return \" !@\" for \" !@", () => {
      assert.equal(cipher.encode(33, " !@"), " !@");
    });

    // Teste para números
    
    it("should return \"123\" para \"123", () => {
      assert.equal(cipher.encode(33, "123"), "123");
    });

  });

  describe("cipher.decode", () => {

    it("should be a function", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it("should return \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" for \"HIJKLMNOPQRSTUVWXYZABCDEFG\" with offset 33", () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    //Teste para letras minúsculas
    
    it("should return \"abcdefghijklmnopqrstuvwxyz\" for \"hijklmnopqrstuvwxyzabcdefg\" with offset 33", () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });

    // Teste para caracteres não alfabéticos

    it("should return \" !@\" para \" !@", () => {
      assert.equal(cipher.decode(33, " !@"), " !@");
    });

    // Teste para números

    it("should return \"123\" para \"123", () => {
      assert.equal(cipher.decode(33, "123"), "123");
    });
  });
});