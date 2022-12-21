console.log('test');

function generateHexCoords(){
    let output = "";
    for (let col =0; col < 10;++col){
      for (let row = 0; row < 6;++row){
        output += "    - hexvalue:\n";
        output += "      coordinate:\n";
        output += "        col: " + col +"\n";
        output += "        row: " + row + "\n";
        output += "      value: 1\n";
      }
    }
    return output;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const sampleLength = alphabet.length;

function getId(index){
  let remainder = index % sampleLength;
  let quotient = Math.floor(index / sampleLength);
  let numChars = Math.floor(quotient / sampleLength) + 1;
  //console.log('index:',index,'quotient:',quotient,'numChars:',numChars,'remainder:',remainder);
  let result = "";
  for (let i = 0; i < quotient;++i){    
    result += "z";
  }
  result += alphabet.charAt(remainder);
  return result;
}

/*
let index = 25 * 26;
index += 0;
//console.log(getId(index));
for (let i = 0; i < index;++i){
    console.log(getId(i));
}
*/

function generateNodes(){
    let output = "";
    let index = 0;
    for (let col = 0; col < 10;++col){
        for (let row = 0; row < 6;++row){
            output += "      - node:\n";
            output += "        id: \"" + getId(index) + "\"\n";
            output += "        hex:\n";
            output += "          col: "+col+"\n";
            output += "          row: "+row+"\n";
            ++index;
        }
    }   
    return output; 
}

//const hexCoordsData = generateHexCoords();
//console.log(hexCoordsData);

const nodesData = generateNodes();
console.log('nodesData:\n',nodesData);
