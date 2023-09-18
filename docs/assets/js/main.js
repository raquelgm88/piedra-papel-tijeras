"use strict";const machine=["Piedra","Papel","Tijeras","Lagarto","Spock"],rock=document.querySelector(".js__rock"),paper=document.querySelector(".js__paper"),scissors=document.querySelector(".js__scissors"),lizard=document.querySelector(".js__lizard"),spock=document.querySelector(".js__spock"),reset=document.querySelector(".js__reset"),machineChoise=document.querySelector(".js__random"),msg=document.querySelector(".js__msg"),max=5,options={"1_0":1,"2_0":0,"2_1":2,"3_0":0,"4_3":3,"4_2":4,"3_2":2,"3_1":3,"4_1":1,"4_0":4};function getRandomNumber(e){return Math.floor(Math.random()*e)}reset.classList.add("hidden");let randomNumber=getRandomNumber(5);function renderMachineOption(){console.log("Sheldon ha elegido "+machine[randomNumber])}function checkChoices(e){if(randomNumber===e)return"Enhorabuena, hemos empatado";return e===options[randomNumber>e?`${randomNumber}_${e}`:`${e}_${randomNumber}`]?"¡Oh, porras! Me has ganado":"¡Has perdido! ¡Zas, en toda la boca!"}function showMachineOption(){machineChoise.innerHTML="Sheldon ha elegido: "+machine[randomNumber]}function disabledBtn(){rock.disabled=!0,paper.disabled=!0,scissors.disabled=!0,lizard.disabled=!0,spock.disabled=!0}function enabledBtn(){rock.disabled=!1,paper.disabled=!1,scissors.disabled=!1,lizard.disabled=!1,spock.disabled=!1}function handleClickButton(e){e.preventDefault();const n=parseInt(e.currentTarget.id);msg.innerHTML=checkChoices(n),showMachineOption(),reset.classList.remove("hidden"),disabledBtn()}function handleClickReset(e){e.preventDefault(),randomNumber=getRandomNumber(5),renderMachineOption(),msg.innerHTML="",machineChoise.innerHTML="",reset.classList.add("hidden"),enabledBtn()}renderMachineOption(),rock.addEventListener("click",handleClickButton),paper.addEventListener("click",handleClickButton),scissors.addEventListener("click",handleClickButton),lizard.addEventListener("click",handleClickButton),spock.addEventListener("click",handleClickButton),reset.addEventListener("click",handleClickReset);