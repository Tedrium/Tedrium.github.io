* {
  font-family: Arial;
}

html,
body {
  height: 100vh;
  text-align-last: center;
}

.panel {
  display: flex;
  width: 100%;
  min-height: 400px;
  justify-content: space-evenly;
 
  padding: 10px 0 10px 0;
}

.card1,
.card2,
.card3 {
  width: 300px;
  height: 350px;
  font-size: 35px;
  border-radius: 10px;
  text-align: center;
  border-style: groove;
}

.container {
  padding-top: 50px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  border-style: groove;
  background-color: rgba(6, 6, 6, 0.796);
}

.instruction {
  width: 100%;
  height: auto;
 
  text-align: center;
  border-style: groove;
}
.btnChoice {
  width: 70px;
  height: 30px;
  font-size: 15px;
  visibility: hidden;
  color: #000000;
  background: #fff;
  padding: 3px;
  cursor: pointer;
  border-radius: 6px;
}
.btnChoice:hover {
  color: #fff;
  background: #002bff;
}
.init {
  width: 150px;
  height: 45px;
  font-size: 25px;
  color: #fefefe;
  background: #04ccb2;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
  font-style: italic;
  font-variant: normal;
  border-style: solid;
  border-color: #2b00ff;
  font-family: sans-serif serif;
}
p {
  font-size: 15px;
}
.glow-on-hover {
  width: 220px;
  height: 50px;
  visibility: hidden;
  font-size: 20px;
  border: none;
  outline: none;
  color: #000000;
  background: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #ffffff;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: hsl(0, 0%, 100%);
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

footer {
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

}
.foot-container {
    width: 100%;
}

