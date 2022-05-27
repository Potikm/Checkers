let coins = document.querySelectorAll("[data-coin]");
let moveCells = document.querySelectorAll(".moveCell");

let long = -1;
let cell;
let cell2;
let cell3;
let cell4;
var activeCoin;
var go = false;
var turn = true;
var side = "";
var activeQueen = false;
let canCreate = true;
var canKill = false;
var corner = false;
var canKillLeft = false;
var canForward = true;
var queenMoves = [];
var dead = [];
var move = [];
var backIsActive = false;


coins.forEach(coin => {
  
   coin.addEventListener("click", function() {
      clearButtons();
      activeCoin = document.getElementById(coin.parentNode.id).getElementsByTagName("img")[0];
       whereGo(coin);
       
       //console.log(turn);
       //console.log(activeCoin);
})})



function whereGo(coin){
   canForward = true;
   activeQueen = false;
   queenMoves = [];
   dead = [];
   corner = false;
   move = [];
   canKillLeft = false;
   canKill = false;
   backIsActive = false;
   canCreate = true;
  var id = coin.parentNode.id;
  console.log(coin)
  //console.log(id);
  repeat = true;
  moveCells = document.querySelectorAll(".moveCell");
  coins = document.querySelectorAll("[data-coin]");
  
  if (coin.src.includes("Queen")){
     activeQueen = true;
     console.log("queen");

     
     if (isTopDown(coin.parentNode.id) == "top"){
      console.log("top");
      queenMoves.push(cell = document.getElementById(parseInt(id)+5),
      cell2 = document.getElementById(parseInt(id)+6));

      let i = 0;
      while(i < queenMoves.length){

         if (i == 0){
           
            let idd = queenMoves[i].id;

            if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
               if (isLong2(queenMoves[i])){
                  goCell = document.getElementById(parseInt(idd) + 4)
                  createBtn(goCell);
                  move.push(goCell);
                  dead.push(queenMoves[i]);
                  break;
               }else{
                  goCell = document.getElementById(parseInt(idd) + 5)
                  createBtn(goCell);
                  move.push(goCell);
                  dead.push(queenMoves[i]);
                  break;
               }
            } else{                                                              // there starting to check everywhere
               createBtn(queenMoves[i]);
               while(isEnd(idd) == false){
                 if (isLong2(idd)){
                    goCell = document.getElementById(parseInt(idd) + 4);
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(parseInt(goCell.id) + 5))
                          move.push(document.getElementById(parseInt(goCell.id) + 5))
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                          
                       }
                    }
                    idd = parseInt(idd) + 4;
                    
                 }else{
                    goCell = document.getElementById(parseInt(idd) + 5);      
                    console.log(goCell)        
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(parseInt(goCell.id) + 4))
                          move.push(document.getElementById(parseInt(goCell.id) + 4))           // vytvarime button o 4 protoze jdeme ze short na long
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                       }
                    }
                    idd = parseInt(idd) + 5;
                 }                                                            // End of MID - Left Down          
               }
            }
            i++;
         }

         if (i == 1){
            createBtn(queenMoves[i]);
            let idd = queenMoves[i].id;

            if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
               if (isLong2(queenMoves[i])){
                  goCell = document.getElementById(parseInt(idd) + 5)
                  createBtn(goCell);
                  move.push(goCell);
                  dead.push(queenMoves[i]);
                  break;
               }else{
                  goCell = document.getElementById(parseInt(idd) + 6)
                  createBtn(goCell);
                  move.push(goCell);
                  dead.push(queenMoves[i]);
                  break;
               }
            } else{                                                      // there starting to check everywhere
               createBtn(queenMoves[i]);
               while(isEnd(idd) == false){
                 if (isLong2(idd)){
                    goCell = document.getElementById(parseInt(idd) + 5);
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(parseInt(goCell.id) + 6))
                          move.push(document.getElementById(parseInt(goCell.id) + 6))
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                          
                       }
                    }
                    idd = parseInt(idd) + 5;
                    
                 }else{
                    goCell = document.getElementById(parseInt(idd) + 6);      
                    console.log(goCell)        
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(parseInt(goCell.id) + 5))
                          move.push(document.getElementById(parseInt(goCell.id) + 5))           // vytvarime button o 4 protoze jdeme ze short na long
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                       }
                    }
                    idd = parseInt(idd) + 6;
                 }                                                            // End of MID - Right Down          
               }
            }
            i++;
         }

         if (move.length > 0){
            showOnlyKills();
         }
   
         
         

      }

     }else if (isTopDown(coin.parentNode.id) == "down"){
      console.log("down");
      queenMoves.push(cell = document.getElementById(parseInt(id)-5),
      cell2 = document.getElementById(parseInt(id)-6));

      let i = 0;
      while(i < queenMoves.length){

         if (i == 0){
            
            let idd = queenMoves[i].id;
            if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
               if (isLong2(queenMoves[i])){
                  goCell = document.getElementById(idd - 5)
                  createBtn(goCell);
                  move.push(goCell);
                  dead.push(queenMoves[i]);
                  break;
               }else{
                  goCell = document.getElementById(idd - 4)
                  createBtn(goCell);
                  move.push(goCell);
                  dead.push(queenMoves[i]);
                  break;
               }
               
            }else{                                                       // there starting to check everywhere
               createBtn(queenMoves[i]);
               while(isEnd(idd) == false){
                 if (isLong2(idd)){
                    goCell = document.getElementById(idd - 5);
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(goCell.id - 4))
                          move.push(document.getElementById(goCell.id - 4))
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                          
                       }
                    }
                    idd -=5;
                    
                 }else{
                    goCell = document.getElementById(idd-4);              
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(goCell.id - 5))
                          move.push(document.getElementById(goCell.id - 5))           // vytvarime button o 5 protoze jdeme ze short na long
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                       }
                    }
                    idd -=4;
                 }                                                            // End of MID - Right Top            
               }
            }
          
            i++;
         }

         if (i == 1){
            
            let idd = queenMoves[i].id;

            if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
               if (isLong2(queenMoves[i])){
                  goCell = document.getElementById(idd - 6)
                  createBtn(goCell);
                  move.push(goCell);
                  dead.push(queenMoves[i]);
                  break;
               }else{
                  goCell = document.getElementById(idd - 5)
                  createBtn(goCell);
                  move.push(goCell);
                  dead.push(queenMoves[i]);
                  break;
               }
               
             }else{                                                       // there starting to check everywhere
               createBtn(queenMoves[i]);
               while(isEnd(idd) == false){
                 if (isLong2(idd)){
                    goCell = document.getElementById(idd-6);
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(goCell.id - 5))
                          move.push(document.getElementById(goCell.id - 5))
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                          
                       }
                    }
                    idd -=6;
                    
                 }else{
                    goCell = document.getElementById(idd-5);              
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(goCell.id - 6))
                          move.push(document.getElementById(goCell.id - 6))           // vytvarime button o 6 protoze jdeme ze short na long
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                       }
                    }
                    idd -=5;
                 }                                                            // End of MID - Left Top              
               }
             }
            i++;
         }
         if (move.length > 0){
            showOnlyKills();
         }
      }

     }else{
      if (isExtraCorner(coin.parentNode.id) == "top"){
         console.log("top");
         queenMoves.push(cell = document.getElementById(parseInt(id)+5));
         
         let i = 0;
         while(i < queenMoves.length){
   
            if (i == 0){
              
               let idd = queenMoves[i].id;
   
               if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
                  if (isLong2(queenMoves[i])){
                     goCell = document.getElementById(parseInt(idd) + 4)
                     createBtn(goCell);
                     move.push(goCell);
                     dead.push(queenMoves[i]);
                     break;
                  }else{
                     goCell = document.getElementById(parseInt(idd) + 5)
                     createBtn(goCell);
                     move.push(goCell);
                     dead.push(queenMoves[i]);
                     break;
                  }
               } else{                                                              // there starting to check everywhere
                  createBtn(queenMoves[i]);
                  while(isEnd(idd) == false){
                    if (isLong2(idd)){
                       goCell = document.getElementById(parseInt(idd) + 4);
                       if (isOccupied2(goCell) == false){
                          createBtn(goCell);
                       }else{
                          if (isEnd(goCell.id) == false){
                             createBtn(document.getElementById(parseInt(goCell.id) + 5))
                             move.push(document.getElementById(parseInt(goCell.id) + 5))
                             dead.push(document.getElementById(goCell.id));
                             break;
                             
                          }else{
                             break;
                             
                          }
                       }
                       idd = parseInt(idd) + 4;
                       
                    }else{
                       goCell = document.getElementById(parseInt(idd) + 5);      
                       console.log(goCell)        
                       if (isOccupied2(goCell) == false){
                          createBtn(goCell);
                       }else{
                          if (isEnd(goCell.id) == false){
                             createBtn(document.getElementById(parseInt(goCell.id) + 4))
                             move.push(document.getElementById(parseInt(goCell.id) + 4))           // vytvarime button o 4 protoze jdeme ze short na long
                             dead.push(document.getElementById(goCell.id));
                             break;
                          }else{
                             break;
                          }
                       }
                       idd = parseInt(idd) + 5;
                    }                                                            // End of MID - Left Down          
                  }
               }
            }
            i++;
   
         }
         if (move.length > 0){
            showOnlyKills();
         }
         
        }else if (isExtraCorner(coin.parentNode.id) == "down"){
         console.log("down");
         queenMoves.push(cell = document.getElementById(parseInt(id)-5));
   
         let i = 0;
         while(i < queenMoves.length){
   
            if (i == 0){
               
               let idd = queenMoves[i].id;
   
               if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
                  if (isLong2(queenMoves[i])){
                     goCell = document.getElementById(idd - 5)
                     createBtn(goCell);
                     move.push(goCell);
                     dead.push(queenMoves[i]);
                     break;
                  }else{
                     goCell = document.getElementById(idd - 4)
                     createBtn(goCell);
                     move.push(goCell);
                     dead.push(queenMoves[i]);
                     break;
                  }
                  
               }else{                                                       // there starting to check everywhere
                  createBtn(queenMoves[i]);
                  while(isEnd(idd) == false){
                    if (isLong2(idd)){
                       goCell = document.getElementById(idd - 5);
                       if (isOccupied2(goCell) == false){
                          createBtn(goCell);
                       }else{
                          if (isEnd(goCell.id) == false){
                             createBtn(document.getElementById(goCell.id - 4))
                             move.push(document.getElementById(goCell.id - 4))
                             dead.push(document.getElementById(goCell.id));
                             break;
                          }else{
                             break;
                             
                          }
                       }
                       idd -=5;
                       
                    }else{
                       goCell = document.getElementById(idd-4);              
                       if (isOccupied2(goCell) == false){
                          createBtn(goCell);
                       }else{
                          if (isEnd(goCell.id) == false){
                             createBtn(document.getElementById(goCell.id - 5))
                             move.push(document.getElementById(goCell.id - 5))           // vytvarime button o 5 protoze jdeme ze short na long
                             dead.push(document.getElementById(goCell.id));
                             break;
                          }else{
                             break;
                          }
                       }
                       idd -=4;
                    }                                                            // End of MID - Right Top            
                  }
               }
            }         
            i++;      
                                           
         }
         if (move.length > 0){
            showOnlyKills();
         }    
        }else{
         if (isCorner2(coin.parentNode.id) == "left"){
           
            queenMoves.push(cell = document.getElementById(parseInt(id)-5),
            cell2 = document.getElementById(parseInt(id) + 5));
    
    
            let i = 0;
            while(i < queenMoves.length){
    
             if (i == 0){
                
                let idd = queenMoves[i].id;
                
                if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
                  if (isLong2(queenMoves[i])){
                     goCell = document.getElementById(idd - 5)
                     createBtn(goCell);
                     move.push(goCell);
                     dead.push(queenMoves[i]);
                     break;
                  }else{
                     goCell = document.getElementById(idd - 4)
                     createBtn(goCell);
                     move.push(goCell);
                     dead.push(queenMoves[i]);
                     break;
                  }
                  
               }else{                                                       // there starting to check everywhere
                  createBtn(queenMoves[i]);
                  while(isEnd(idd) == false){
                    if (isLong2(idd)){
                       goCell = document.getElementById(idd - 5);
                       if (isOccupied2(goCell) == false){
                          createBtn(goCell);
                       }else{
                          if (isEnd(goCell.id) == false){
                             createBtn(document.getElementById(goCell.id - 4))
                             move.push(document.getElementById(goCell.id - 4))
                             dead.push(document.getElementById(goCell.id));
                             break;
                          }else{
                             break;
                             
                          }
                       }
                       idd -=5;
                       
                    }else{
                       goCell = document.getElementById(idd-4);              
                       if (isOccupied2(goCell) == false){
                          createBtn(goCell);
                       }else{
                          if (isEnd(goCell.id) == false){
                             createBtn(document.getElementById(goCell.id - 5))
                             move.push(document.getElementById(goCell.id - 5))           // vytvarime button o 5 protoze jdeme ze short na long
                             dead.push(document.getElementById(goCell.id));
                             break;
                          }else{
                             break;
                          }
                       }
                       idd -=4;
                    }                                                            // End of MID - Right Top            
                  }
               }
                  
                   
                
             }
             if (i == 1){
               
                let idd = queenMoves[i].id;
                
                if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
                  if (isLong2(queenMoves[i])){
                     goCell = document.getElementById(parseInt(idd) + 5)
                     createBtn(goCell);
                     move.push(goCell);
                     dead.push(queenMoves[i]);
                     break;
                  }else{
                     goCell = document.getElementById(parseInt(idd) + 6)
                     createBtn(goCell);
                     move.push(goCell);
                     dead.push(queenMoves[i]);
                     break;
                  }
               } else{                                                      // there starting to check everywhere
                  createBtn(queenMoves[i]);
                  while(isEnd(idd) == false){
                    if (isLong2(idd)){
                       goCell = document.getElementById(parseInt(idd) + 5);
                       if (isOccupied2(goCell) == false){
                          createBtn(goCell);
                       }else{
                          if (isEnd(goCell.id) == false){
                             createBtn(document.getElementById(parseInt(goCell.id) + 6))
                             move.push(document.getElementById(parseInt(goCell.id) + 6))
                             dead.push(document.getElementById(goCell.id));
                             break;
                          }else{
                             break;
                             
                          }
                       }
                       idd = parseInt(idd) + 5;
                       
                    }else{
                       goCell = document.getElementById(parseInt(idd) + 6);      
                       console.log(goCell)        
                       if (isOccupied2(goCell) == false){
                          createBtn(goCell);
                       }else{
                          if (isEnd(goCell.id) == false){
                             createBtn(document.getElementById(parseInt(goCell.id) + 5))
                             move.push(document.getElementById(parseInt(goCell.id) + 5))           // vytvarime button o 4 protoze jdeme ze short na long
                             dead.push(document.getElementById(goCell.id));
                             break;
                          }else{
                             break;
                          }
                       }
                       idd = parseInt(idd) + 6;
                    }                                                            // End of MID - Right Down          
                  }
               }
                
                
             }
             i++;
    
            }
            if (move.length > 0){
               showOnlyKills();
            }
    
         }else if (isCorner2(coin.parentNode.id) == "right"){
          console.log("right");
          queenMoves.push(cell = document.getElementById(parseInt(id)-5),
          cell2 = document.getElementById(parseInt(id) + 5));
    
          let i = 0;
          while(i < queenMoves.length){
    
           if (i == 0){
             
              let idd = queenMoves[i].id;
              if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
               goCell = document.getElementById(idd - 6)
               createBtn(goCell);
               move.push(goCell);
               dead.push(queenMoves[i]);
               break;
             }else{                                                       // there starting to check everywhere
               createBtn(queenMoves[i]);
               while(isEnd(idd) == false){
                 if (isLong2(idd)){
                    goCell = document.getElementById(idd-6);
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(goCell.id - 5))
                          move.push(document.getElementById(goCell.id - 5))
                          dead.push(document.getElementById(goCell.id));
                          break;
                          
                       }else{
                          break;
                          
                       }
                    }
                    idd -=6;
                    
                 }else{
                    goCell = document.getElementById(idd-5);              
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(goCell.id - 6))
                          move.push(document.getElementById(goCell.id - 6))           // vytvarime button o 6 protoze jdeme ze short na long
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                       }
                    }
                    idd -=5;
                 }                                                            // End of MID - Left Top              
               }
             }
              
           }
           if (i == 1){
              
              let idd = queenMoves[i].id;
              if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
               goCell = document.getElementById(parseInt(idd) + 4)
               createBtn(goCell);
               move.push(goCell);
               dead.push(queenMoves[i]);
               break;
            } else{                                                              // there starting to check everywhere
               createBtn(queenMoves[i]);
               while(isEnd(idd) == false){
                 if (isLong2(idd)){
                    goCell = document.getElementById(parseInt(idd) + 4);
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(parseInt(goCell.id) + 5))
                          move.push(document.getElementById(parseInt(goCell.id) + 5))
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                          
                       }
                    }
                    idd = parseInt(idd) + 4;
                    
                 }else{
                    goCell = document.getElementById(parseInt(idd) + 5);      
                    console.log(goCell)        
                    if (isOccupied2(goCell) == false){
                       createBtn(goCell);
                    }else{
                       if (isEnd(goCell.id) == false){
                          createBtn(document.getElementById(parseInt(goCell.id) + 4))
                          move.push(document.getElementById(parseInt(goCell.id) + 4))           // vytvarime button o 4 protoze jdeme ze short na long
                          dead.push(document.getElementById(goCell.id));
                          break;
                       }else{
                          break;
                       }
                    }
                    idd = parseInt(idd) + 5;
                 }                                                            // End of MID - Left Down          
               }
            }
           }
           i++;
           
          }
          if (move.length > 0){
            showOnlyKills();
          }
         }else{
          if (isLong(coin)){
             queenMoves.push(cell = document.getElementById(parseInt(id)-6),
             cell2 = document.getElementById(parseInt(id)-5),
             cell3 = document.getElementById(parseInt(id)+4),
             cell4 = document.getElementById(parseInt(id)+5))
            
             
            }else{
             queenMoves.push(cell = document.getElementById(parseInt(id)-5),
             cell2 = document.getElementById(parseInt(id)-4),
             cell3 = document.getElementById(parseInt(id)+5),
             cell4 = document.getElementById(parseInt(id)+6))
             
            }
           console.log(queenMoves)
            let i = 0;
             while (i < queenMoves.length){
                if (i == 0){
                 
                   let idd = queenMoves[i].id;
                   console.log(idd)
                   
                   if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
                     if (isLong2(queenMoves[i])){
                        goCell = document.getElementById(idd - 6)
                        createBtn(goCell);
                        move.push(goCell);
                        dead.push(queenMoves[i]);
                        break;
                     }else{
                        goCell = document.getElementById(idd - 5)
                        createBtn(goCell);
                        move.push(goCell);
                        dead.push(queenMoves[i]);
                        break;
                     }
                     
                   }else{                                                       // there starting to check everywhere
                     createBtn(queenMoves[i]);
                     while(isEnd(idd) == false){
                       if (isLong2(idd)){
                          goCell = document.getElementById(idd-6);
                          if (isOccupied2(goCell) == false){
                             createBtn(goCell);
                          }else{
                             if (isEnd(goCell.id) == false){
                                createBtn(document.getElementById(goCell.id - 5))
                                move.push(document.getElementById(goCell.id - 5))
                                dead.push(document.getElementById(goCell.id));
                                break;
                             }else{
                                break;
                                
                             }
                          }
                          idd -=6;
                          
                       }else{
                          goCell = document.getElementById(idd-5);              
                          if (isOccupied2(goCell) == false){
                             createBtn(goCell);
                          }else{
                             if (isEnd(goCell.id) == false){
                                createBtn(document.getElementById(goCell.id - 6))
                                move.push(document.getElementById(goCell.id - 6))           // vytvarime button o 6 protoze jdeme ze short na long
                                dead.push(document.getElementById(goCell.id));
                                break;
                             }else{
                                break;
                             }
                          }
                          idd -=5;
                       }                                                            // End of MID - Left Top              
                     }
                   }

                   



                }
                if (i == 1){
                  let idd = queenMoves[i].id;
                  console.log(idd)
                   
                  if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
                     if (isLong2(queenMoves[i])){
                        goCell = document.getElementById(idd - 5)
                        createBtn(goCell);
                        move.push(goCell);
                        dead.push(queenMoves[i]);
                        break;
                     }else{
                        goCell = document.getElementById(idd - 4)
                        createBtn(goCell);
                        move.push(goCell);
                        dead.push(queenMoves[i]);
                        break;
                     }
                     
                  }else{                                                       // there starting to check everywhere
                     createBtn(queenMoves[i]);
                     while(isEnd(idd) == false){
                       if (isLong2(idd)){
                          goCell = document.getElementById(idd - 5);
                          if (isOccupied2(goCell) == false){
                             createBtn(goCell);
                          }else{
                             if (isEnd(goCell.id) == false){
                                createBtn(document.getElementById(goCell.id - 4))
                                move.push(document.getElementById(goCell.id - 4))
                                dead.push(document.getElementById(goCell.id));
                                break;
                             }else{
                                break;
                                
                             }
                          }
                          idd -=5;
                          
                       }else{
                          goCell = document.getElementById(idd-4);              
                          if (isOccupied2(goCell) == false){
                             createBtn(goCell);
                          }else{
                             if (isEnd(goCell.id) == false){
                                createBtn(document.getElementById(goCell.id - 5))
                                move.push(document.getElementById(goCell.id - 5))           // vytvarime button o 5 protoze jdeme ze short na long
                                dead.push(document.getElementById(goCell.id));
                                break;
                             }else{
                                break;
                             }
                          }
                          idd -=4;
                       }                                                            // End of MID - Right Top            
                     }
                  }

                  
                }

                if (i == 2){
                  let idd = queenMoves[i].id;
                  
                  if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
                     if (isLong2(queenMoves[i])){
                        goCell = document.getElementById(parseInt(idd) + 4)
                        createBtn(goCell);
                        move.push(goCell);
                        dead.push(queenMoves[i]);
                        break;
                     }else{
                        goCell = document.getElementById(parseInt(idd) + 5)
                        createBtn(goCell);
                        move.push(goCell);
                        dead.push(queenMoves[i]);
                        break;
                     }
                  } else{                                                              // there starting to check everywhere
                     createBtn(queenMoves[i]);
                     while(isEnd(idd) == false){
                       if (isLong2(idd)){
                          goCell = document.getElementById(parseInt(idd) + 4);
                          if (isOccupied2(goCell) == false){
                             createBtn(goCell);
                          }else{
                             if (isEnd(goCell.id) == false){
                                createBtn(document.getElementById(parseInt(goCell.id) + 5))
                                move.push(document.getElementById(parseInt(goCell.id) + 5))
                                dead.push(document.getElementById(goCell.id));
                                break;
                             }else{
                                break;
                                
                             }
                          }
                          idd = parseInt(idd) + 4;
                          
                       }else{
                          goCell = document.getElementById(parseInt(idd) + 5);      
                          console.log(goCell)        
                          if (isOccupied2(goCell) == false){
                             createBtn(goCell);
                          }else{
                             if (isEnd(goCell.id) == false){
                                createBtn(document.getElementById(parseInt(goCell.id) + 4))
                                move.push(document.getElementById(parseInt(goCell.id) + 4))           // vytvarime button o 4 protoze jdeme ze short na long
                                dead.push(document.getElementById(goCell.id));
                                break;
                             }else{
                                break;
                             }
                          }
                          idd = parseInt(idd) + 5;
                       }                                                            // End of MID - Left Down          
                     }
                  }

                 
                }
                
                if (i == 3){
                  let idd = queenMoves[i].id;
                  
                  if (isOccupied2(queenMoves[i])){                             // checking for kill around queen
                     if (isLong2(queenMoves[i])){
                        goCell = document.getElementById(parseInt(idd) + 5)
                        createBtn(goCell);
                        move.push(goCell);
                        dead.push(queenMoves[i]);
                        break;
                     }else{
                        goCell = document.getElementById(parseInt(idd) + 6)
                        createBtn(goCell);
                        move.push(goCell);
                        dead.push(queenMoves[i]);
                        break;
                     }
                  } else{                                                      // there starting to check everywhere
                     createBtn(queenMoves[i]);
                     while(isEnd(idd) == false){
                       if (isLong2(idd)){
                          goCell = document.getElementById(parseInt(idd) + 5);
                          if (isOccupied2(goCell) == false){
                             createBtn(goCell);
                          }else{
                             if (isEnd(goCell.id) == false){
                                createBtn(document.getElementById(parseInt(goCell.id) + 6))
                                move.push(document.getElementById(parseInt(goCell.id) + 6))
                                dead.push(document.getElementById(goCell.id));
                                break;
                             }else{
                                break;
                                
                             }
                          }
                          idd = parseInt(idd) + 5;
                          
                       }else{
                          goCell = document.getElementById(parseInt(idd) + 6);      
                          console.log(goCell)        
                          if (isOccupied2(goCell) == false){
                             createBtn(goCell);
                          }else{
                             if (isEnd(goCell.id) == false){
                                createBtn(document.getElementById(parseInt(goCell.id) + 5))
                                move.push(document.getElementById(parseInt(goCell.id) + 5))           // vytvarime button o 4 protoze jdeme ze short na long
                                dead.push(document.getElementById(goCell.id));
                                break;
                             }else{
                                break;
                             }
                          }
                          idd = parseInt(idd) + 6;
                       }                                                            // End of MID - Right Down          
                     }
                  }
                 
                }
              
                i++;
             }
             if (move.length > 0){
                showOnlyKills();
             }
         }
        }
   
      
        console.log(queenMoves);
     }

    
  }else{
   if (turn == true){
      cell = document.getElementById(parseInt(id)-5);
     
      if (isCorner(coin) && isStarter(coin.id) == true){
         cell2 =  document.getElementById(parseInt(id)+5);
         
         
         if (isStarter(cell2.id) == false && isOccupied2(cell2) == true){
            corner = true;
            showBackKill(cell2.id);
         }
      }

      if (isCorner(coin) && isStarter(cell.id) && isOccupied2(cell) == true){
         return;
      }

      if (isCorner(coin) && !isOccupied(cell)){
         cell = document.getElementById(parseInt(id)-5);
         if (canForward){
            createBtn(cell);
         }
        
         
         
      }else{
         if (canCreate == false){
            var buttons = document.querySelectorAll('.button');
            buttons.forEach(but => {
               but.onclick = function(e){
                  var target = e.target;
                  console.log("click");
                  //console.log(target);
                  moveCoin(target);
                  killEnemy(dead, move, target);
                  clearButtons(buttons);
                  changeTurn(turn);
               }
            })
     
            return;
         }
         if(isLong(coin)){
            cell = document.getElementById(parseInt(id)-6);
            cell2 = document.getElementById(parseInt(id)-5);
            cell3 = document.getElementById(parseInt(id) + 4);
            cell4 = document.getElementById(parseInt(id) + 5);
            side = "left";
            if (cell3 != null){
               if (isStarter(cell3.id) == false && isOccupied2(cell3) == true && isCorner2(cell3.id) != "left" && isWhite(cell3) == false){
                  showBackKill(cell3.id);
               }
            }
           side = "right";
            if (cell4 != null){
               if (isStarter(cell4.id) == false && isOccupied2(cell4) == true && isCorner2(cell4.id) != "right" && isWhite(cell4) == false){
                  showBackKill(cell4.id);                                                     //Pohyb dozadu
               }
            }
         
           }else{
            cell = document.getElementById(parseInt(id)-5);
            cell2 = document.getElementById(parseInt(id)-4);
            cell3 = document.getElementById(parseInt(id) + 5)
            cell4 = document.getElementById(parseInt(id) + 6);
            side = "left";
            if (cell3 != null){
               if (isStarter(cell3.id) == false && isOccupied2(cell3) == true && isCorner2(cell3.id) != "left"&& isWhite(cell3) == false){
                  showBackKill(cell3.id);
               }
            }
            side = "right";
            if (cell4 != null){
               if (isStarter(cell4.id) == false && isOccupied2(cell4) == true && isCorner2(cell4.id) != "right"&& isWhite(cell4) == false){
                  showBackKill(cell4.id);                                                     //Pohyb dozadu
               }
            }
           }
           side = "left";
          if (isOccupied(cell) == false){
            //cell.classList.add("canGo");
            if (canCreate && canKill == false){
               canKillLeft = true;
               if (canForward){
                  createBtn(cell);
               }
             
            }
            if (canCreate == false){
               return;
            }
           
         }
         side = "right";
         if (isOccupied(cell2) == false){
            //cell2.classList.add("canGo");
            if (canCreate && canKill == false){
               if (canForward){
                  createBtn(cell2);
               }
               
            }
         }
       
         
        
        
        
      }
     }else{
      cell = document.getElementById(parseInt(id)+5);
       
      if (isCorner(coin) && isStarter(coin.id) == true){
         cell2 = document.getElementById(parseInt(id) - 5);
      
         if (isStarter(cell2.id) == false && isOccupied2(cell2) == true && isWhite(cell2)){
            corner = true;
            showBackKill(cell2.id);
         }
      }

      if (isCorner(coin) && isStarter(cell.id) && isOccupied2(cell) == true){
         return;
      }

      if (isCorner(coin) && !isOccupied(cell)){
         cell = document.getElementById(parseInt(id)+5);
         if (canForward){
            createBtn(cell);
         }
        
        

      }else{
         if (canCreate == false){
            var buttons = document.querySelectorAll('.button');
            buttons.forEach(but => {
               but.onclick = function(e){
                  var target = e.target;
                  console.log("click");
                  //console.log(target);
                  moveCoin(target);
                  killEnemy(dead, move, target);
                  clearButtons(buttons);
                  changeTurn(turn);
               }
            })
     
            return;
         }
         if(isLong(coin)){
            cell = document.getElementById(parseInt(id) + 5);
            cell2 = document.getElementById(parseInt(id) + 4);
            cell3 = document.getElementById(parseInt(id) - 5);
            cell4 = document.getElementById(parseInt(id) - 6);
           }else{
            cell = document.getElementById(parseInt(id) + 6);
            cell2 = document.getElementById(parseInt(id) + 5);
            cell3 = document.getElementById(parseInt(id) - 4);
            cell4 = document.getElementById(parseInt(id) - 5);
           }

           side = "right";
           if (cell3 != null){
            if (isStarter(cell3.id) == false && isOccupied2(cell3) == true && isCorner2(cell3.id) != "right" && isWhite(cell3)){
               showBackKill(cell3.id);
            }
           }

           side = "left"
           if (cell4 != null){
            if (isStarter(cell4.id) == false && isOccupied2(cell4) == true && isCorner2(cell4.id) != "left" && isWhite(cell4)){
               showBackKill(cell4.id);                                                     //Pohyb dozadu
            }
           }
           
           side = "right"; 
          if (isOccupied(cell) == false){
            //cell.classList.add("canGo");
            if (canCreate && canKill == false){
               canKillLeft = true;
               if (canForward){
                  createBtn(cell);
               }
            }
            if (canCreate == false){
               return;
            }
           
           
         }  
         side = "left";
         
         if (isOccupied(cell2) == false){
            //cell2.classList.add("canGo");
            if (canCreate && canKill == false){
               canKillLeft = true;
               if (canForward){
                  createBtn(cell2);
               }
            }
           
         }
   
         
        
        
        
      }
  }

  
  }
 
   var buttons = document.querySelectorAll('.button');
   buttons.forEach(but => {
      but.onclick = function(e){
         var target = e.target;
         console.log("click");
         //console.log(target);
         moveCoin(target);
         killEnemy(dead, move, target);
         clearButtons(buttons);
         changeTurn(turn);
      }
   })



}

function isLong(coin){
  var id = coin.parentNode.id;
  if (id >= 46 && id <= 50 || 
    id >= 36 && id <= 40 || 
    id >= 26 && id <= 30 ||
    id >= 16 && id <= 20 ||
    id >= 6 && id <= 10){
       return true;
       
   }
    
}



function moveCoin(go){
   var img = document.getElementById(go.parentNode.id).getElementsByTagName("img")[0];
   console.log(img);

   if (turn == true && activeQueen == true){
      img.src = "Pics/WhiteQueen.png";
   }else if (turn == false && activeQueen == true){
      img.src = "Pics/BlackQueen.png";
   } else{
      if (turn == true){
         img.src = "Pics/whiteCoin.png";
         
      }else{
         img.src = "Pics/blackCoin.png";
        
      }
   }

  
   console.log(go.parentNode.id);
   if (turn == true && isQueen(go.parentNode.id)){                          // QUEEN
      
      img.src = "Pics/whiteQueen.png";
   }
   if (turn == false && isQueen(go.parentNode.id)){
      img.src = "Pics/BlackQueen.png";
   }
   activeCoin.src = "";
   //clearButtons();
  
  
}


function clearButtons(){
   var buttons = document.querySelectorAll('.button');
   buttons.forEach(but => {
      but.remove();
   })
}

function isCorner(coin){
   var id = coin.parentNode.id;
   if (id == 6 |
      id == 16 |
      id == 26 |
      id == 36 |
      id == 46 )
         return true;
      
   if (id == 5 ||
      id == 15 ||
      id == 25 ||
      id == 35 ||
      id == 45 ){
         return true;
      }
}




function isOccupied(celll){        
   let img = document.getElementById(celll.id).getElementsByTagName("img")[0];
   let src = img.getAttribute('src');
   console.log(src);


   if (src.includes("white") || src.includes("black") || src.includes("White") || src.includes("Black") ){                      //there start with killing enemy
      console.log(img.parentNode.id);
      showKill(img.parentNode.id);
     
   }
  
  
   if (!src){
      return false;
   }else{
      return true;
   }
}

function createBtn(cell){
  var btn = document.createElement('button')
  
  btn.classList.add('button');
  cell.appendChild(btn);
}

function isOccupied2(id){
   let img = document.getElementById(id).getElementsByTagName("img")[0];
   let src = img.getAttribute('src');

   if (!src){
      return false;
   }else{
      return true;
   }
}


function changeTurn(Turn){
   const text = document.querySelector(".turn");
   if (turn == true){
      turn = false;
   }else{
      turn = true;
   }
  
   if (Turn == false){
      text.innerHTML = "White´s Turn"
   }else{
      text.innerHTML = "Black´s Turn"
   }
   stopMove();

   
}

function stopMove(){             
  
   for(var i = 0; i < 50; i++){
      var img = document.getElementsByTagName('img');
      document.getElementById(img[i].parentNode.id).style.pointerEvents = "auto";
      
   }


    for(var i = 0; i < 50; i++) {
       var img = document.getElementsByTagName('img');
       
       if (turn == true){
          if (img[i].src.includes("black") || img[i].src.includes("Black")){
            document.getElementById(img[i].parentNode.id).style.pointerEvents = "none";
          }
          if (img[i].src.includes("white") || img[i].src.includes("Wlack")){
            document.getElementById(img[i].parentNode.id).style.pointerEvents = "auto";
          }
         
       }
       if (turn == false){ 
         var img = document.getElementsByTagName('img');
        
         if (img[i].src.includes("white")|| img[i].src.includes("White")){
           
            document.getElementById(img[i].parentNode.id).style.pointerEvents = "none";
         }
         if (img[i].src.includes("black") || img[i].src.includes("Black")){
            
            document.getElementById(img[i].parentNode.id).style.pointerEvents = "auto";
         }
        

      }
    
    
    }
}


function showKill(id){
   if (isStarter(id)){
      return;
   }
   var cell = document.getElementById(id);
   var goCell;
   console.log(cell);

   if (turn == true){
          console.log(side);
          
         if (isMid(activeCoin.parentNode.id) == "left"){
            goCell = document.getElementById(activeCoin.parentNode.id - 9);
            cell = document.getElementById(activeCoin.parentNode.id - 4)
            if (isOccupied2(cell) == true && isOccupied2(goCell) == false && isWhite(cell) == false){
               canKill = true;
               if (canKillLeft && !backIsActive){
                  clearButtons();
               }
               createBtn(goCell);
               dead.push(cell);
               move.push(goCell);
            }

         }else if (isMid(activeCoin.parentNode.id) == "right"){
            goCell = document.getElementById(activeCoin.parentNode.id - 11);
            cell = document.getElementById(activeCoin.parentNode.id - 6)
            if (isOccupied2(cell) == true && isOccupied2(goCell) == false && isWhite(cell) == false){
               canKill = true;
               createBtn(goCell);
               dead.push(cell);
               move.push(goCell);
            }
         
         }else{
            if(isCorner2(activeCoin.parentNode.id) == "left"){
               console.log("left corner");
               canCreate = false;
              goCell = document.getElementById(cell.id - 4);
              if (isOccupied2(goCell) == false && isWhite(cell) == false){
                 
               createBtn(goCell);
               dead.push(cell);
               move.push(goCell);
              }
              
              return;
            }else if(isCorner2(activeCoin.parentNode.id) == "right"){
              console.log("right corner");
              canCreate = false;
              goCell = document.getElementById(cell.id - 6);
              if (isOccupied2(goCell) == false && isWhite(cell) == false){
               createBtn(goCell);
               dead.push(cell);
               move.push(goCell);
              }
              return;
            }else{
              if (side == "left"){
                 if (isLong2(cell.id)){
                   goCell = document.getElementById(id-6);
                 }else{
                   goCell = document.getElementById(id-5);
                 }
                 if (isOccupied2(goCell) == false && isWhite(cell) == false){
                    canKill = true;
                  createBtn(goCell);
                  dead.push(cell);
                  move.push(goCell);
                 }
                 return;
              }
               
              if (side == "right"){
                if (isLong2(cell.id)){
                   goCell = document.getElementById(id-5);
                 }else{
                   goCell = document.getElementById(id-4);
                 }
                 if (isOccupied2(goCell) == false && isWhite(cell) == false){
                  canKill = true;
                  if (canKillLeft && !backIsActive){
                     clearButtons();
                  }
                  createBtn(goCell);
                  dead.push(cell);
                  move.push(goCell);
                 }
                 return;
              }
            }
         }
   }
   //
   if (turn == false){
      console.log("black");

      if (isMid(activeCoin.parentNode.id) == "left"){
         console.log("mid left");
         console.log(activeCoin.parentNode.id);
         goCell = document.getElementById((activeCoin.parentNode.id) - (-11));
         cell = document.getElementById(activeCoin.parentNode.id - (-6));
         console.log(cell);
         console.log(goCell);
         if (isOccupied2(cell) == true && isOccupied2(goCell) == false && isWhite(cell)){
            canKill = true;
            createBtn(goCell);
            dead.push(cell);
            move.push(goCell);
            return;
         }
         return;
      }else if (isMid(activeCoin.parentNode.id) == "right"){
         console.log("mid right");
         console.log(activeCoin.parentNode.id);
         goCell = document.getElementById((activeCoin.parentNode.id) - (-9));
         cell = document.getElementById(activeCoin.parentNode.id - (-4));
         console.log(cell);
         console.log(goCell);
         if (isOccupied2(cell) == true && isOccupied2(goCell) == false && isWhite(cell)){
            canKill = true;
            if (canKillLeft && !backIsActive){
               clearButtons();
            }
            createBtn(goCell);
            dead.push(cell);
            move.push(goCell);
            return;
         }
         return;
      }else{
         if(isCorner2(activeCoin.parentNode.id) == "left"){
            console.log("left corner");
            canCreate = false;
           goCell = document.getElementById(cell.id - (-6));
           if (isOccupied2(goCell) == false && isWhite(cell)){
              
            createBtn(goCell);
            dead.push(cell);
            move.push(goCell);
           }
           
           return;
         } else if (isCorner2(activeCoin.parentNode.id) == "right"){
            console.log("right corner");
            canCreate = false;
            goCell = document.getElementById(cell.id - (-4));
            if (isOccupied2(goCell) == false && isWhite(cell)){
             createBtn(goCell);
             dead.push(cell);
             move.push(goCell);
            }
            return;
         }else{
            console.log(cell);
            if (side == "left"){
               if (isLong2(cell.id)){
                 goCell = document.getElementById(cell.id-(-4));
               }else{
                 goCell = document.getElementById(cell.id-(-5));
               }
               if (isOccupied2(goCell) == false && isWhite(cell)){
                canKill = true;
                if (canKillLeft && !backIsActive){
                  clearButtons();
               }
                createBtn(goCell);
                dead.push(cell);
                move.push(goCell);
               }
               return;
            }
            if (side == "right"){                         
               if (isLong2(cell.id)){
                 goCell = document.getElementById(cell.id -(-5));
               }else{
                 goCell = document.getElementById(cell.id -(-6));
               }
               if (isOccupied2(goCell) == false && isWhite(cell)){
                canKill = true;
                if (canKillLeft && !backIsActive){
                  clearButtons();
               }
                createBtn(goCell);
                dead.push(cell);
                move.push(goCell);
               }
               return;
            }
         }
      }
   }
   
}
                                                                                    // Chceme dodelat dalsi skok po zabiti, kralovnu, zabijeni dozadu


function isCorner2(id){
   if (id == 6 ||
      id == 16 ||
      id == 26 ||
      id == 36 ||
      id == 46 ){
         return "left";
      }
         
      
   if (id == 5 ||
      id == 15 ||
      id == 25 ||
      id == 35 ||
      id == 45 ){
         return "right";
      }
}

function isLong2(id){
   if (id >= 46 && id <= 50 || 
     id >= 36 && id <= 40 || 
     id >= 26 && id <= 30 ||
     id >= 16 && id <= 20 ||
     id >= 6 && id <= 10){
        return true;
        
    }
     
 }
 

 function isMid(id){
   if (id == 1 ||
      id == 11 ||
      id == 21 ||
      id == 31 ||
      id == 41){
         return "left";
      }
   if (id == 10 ||
      id == 20 ||
      id == 30 ||
      id == 40 ||
      id == 50 ){
         return "right";
      }
         
 }

 function isOccupied2(celll){        
   let img = document.getElementById(celll.id).getElementsByTagName("img")[0];
   let src = img.getAttribute('src');

  
  
   if (!src){
      return false;
   }else{
      return true;
   }
}

function isWhite(cell){
   let img = document.getElementById(cell.id).getElementsByTagName("img")[0];
   let src = img.getAttribute('src');

  
  
  if(src.includes("white") || src.includes("White")){
     return true;
  }else{
     return false;
  }
}

function killEnemy(dead, move, target){
  console.log(dead);
  console.log(move);
  console.log(target);
  console.log(document.getElementById(target.parentNode.id)); 
  var target2 = document.getElementById(target.parentNode.id);
  console.log(target2);
  if (dead.length > 0 && move.length > 0){
     if (move[0] == target2){
      var img = document.getElementById(dead[0].id).getElementsByTagName("img")[0];
      console.log(img);
      img.src = "";
     }
     if (move[1] == target2){
      var img = document.getElementById(dead[1].id).getElementsByTagName("img")[0];
      console.log(img);
      img.src = "";
     }
     if (move[2] == target2){
      var img = document.getElementById(dead[2].id).getElementsByTagName("img")[0];
      console.log(img);
      img.src = "";
     }
     if (move[3] == target2){
      var img = document.getElementById(dead[3].id).getElementsByTagName("img")[0];
      console.log(img);
      img.src = "";
     }
     
     
  }
}

function showBackKill(id){
 
   var cell = document.getElementById(id);
   var goCell;
  
   if (turn == true){
      if (corner == true){
         if (isMid(id) == "left"){
            goCell = document.getElementById(parseInt(id) + 6);
         }else{
            goCell = document.getElementById(parseInt(id) + 4);
         }
         if (isOccupied2(goCell) == false){
            createBtn(goCell);
            canForward = false;
            backIsActive = true;
            dead.push(cell);
            move.push(goCell);
         }
        
         return;
      }
     
   }
   if (turn == false){
      if(corner == true){
         if (isMid(id) == "left"){
            
            goCell = document.getElementById(parseInt(id) - 4);
         }else{
            goCell = document.getElementById(parseInt(id) - 6);
         }
         if (isOccupied2(goCell) == false){
            createBtn(goCell);
            canForward = false;
            backIsActive = true;
            dead.push(cell);
            move.push(goCell);
         }
        
         return;
      }
     
   }
    
   if (turn == false){
      if(isLong2(cell.id)){
         if (side == "left"){
            goCell = document.getElementById(parseInt(cell.id) - 6)
         }
         if (side == "right"){
            goCell = document.getElementById(parseInt(cell.id) - 5)
         }
      }else{
         if (side == "left"){
            goCell = document.getElementById(parseInt(cell.id) - 5)
         }
         if (side == "right"){
            goCell = document.getElementById(parseInt(cell.id) - 4)
         }
      }
      if (isOccupied2(goCell) == false){
         createBtn(goCell);
         canForward = false;
         backIsActive = true;
         dead.push(cell);
         move.push(goCell);
      }
    
      return;
   }
  

   console.log(cell);
   if (turn == true){
      if (isLong2(cell.id)){
         if (side == "left"){
            goCell = document.getElementById(parseInt(cell.id) + 4)
         }
         if (side == "right"){
            goCell = document.getElementById(parseInt(cell.id) + 5)
         }
        
      }else{
         if(side == "left"){
            goCell = document.getElementById(parseInt(cell.id) + 5)
         }
         if (side == "right"){
            goCell = document.getElementById(parseInt(cell.id) + 6)
         }
         
      }
      if (isOccupied2(goCell) == false){
         console.log(goCell);
         createBtn(goCell);
         backIsActive = true;
         canForward = false;
         dead.push(cell);
         move.push(goCell);
      }
      
      return;
   }
}


function isQueen(id){
   if (id == 1 ||
      id == 2 ||
      id == 3 ||
      id == 4 ||
      id == 5){
         return true;
      }

   if (id == 46 ||
      id == 47 ||
      id == 48 ||
      id == 49 ||
      id == 50){
         return true;
      }
}

function isStarter(id){
   if (id == 1 ||
      id == 2 ||
      id == 3 ||
      id == 4 ||
      id == 5){
         return true;
      }

   if (id == 46 ||
      id == 47 ||
      id == 48 ||
      id == 49 ||
      id == 50){
         return true;
      }

      return false;
}                                // Chceme dodelat pohyb a zabijeni kralovny


function isTopDown(id){
   if (id == 1 ||
      id == 2 ||
      id == 3 ||
      id == 4){
         return "top";
   }
   
   if (id == 47 ||
      id == 48 ||
      id == 49 ||
      id == 50){
         return "down";
      }
   
}

function isEnd(id){
   if (id == 5 ||
      id == 15 ||
      id == 25 ||
      id == 35 ||
      id == 45){
         return true;
      }
   if (id == 6 ||
      id == 16 ||
      id == 26 ||
      id == 36 ||
      id == 46){
         return true;
   }
   if (id == 1 ||
      id == 2 ||
      id == 3 ||
      id == 4 ||
      id == 5){
         return true;
   }
   if (id == 46 ||
      id == 47 ||
      id == 48 ||
      id == 49 ||
      id == 50){
         return true;
      }else{
         return false;
      }
    
}

function isExtraCorner(id){
if (id == 5){
   return "top";
}
if (id == 46){
   return "down";
}else{
   return false
}
}

function showOnlyKills(){
   clearButtons();
   move.map(x => {
      createBtn(x)
   }) 

   
}