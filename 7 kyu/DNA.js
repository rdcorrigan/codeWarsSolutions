const DNAStrand = dna => {
  const o = {A:'T',T:'A',C:'G',G:'C'};
  return dna.split('').map(l=>o[l]).join('');
}

console.log(DNAStrand('ATTGC')); //TAACG