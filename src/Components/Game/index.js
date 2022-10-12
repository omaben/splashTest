import { Stage, Sprite , withFilters,useTick} from '@inlet/react-pixi'
import { useState, useCallback} from "react";
import * as PIXI from "pixi.js"
const RotatingBunny = () => {
    const [x, setX] = useState(390)
    const [y, setY] = useState(480)
    let i = 480;

    useTick(delta =>{
        i -= 0.05 * delta;
    });
  
    return (
      <Sprite
        image={require("../../Assets/img/cars/car_center.png")}
        width={120}
        height={150}
        x={x} 
        y={y}
        anchor={0.5}
      />
    );
  };
  const LeftMountain = () => {
    return (
      <Sprite
        image={require("../../Assets/img/mountain_left.png")}
        width={150}
        height={150}
        x={100} 
        y={140}
      />
    );
  };
function Game() {
  return (
    <Stage className='game-box' options={{ 
        antialias: true,
        transparent: true
        }}>
        <LeftMountain />
        <Sprite width={180} height={180} x={20} y={300} image={require("../../Assets/img/sideroad_left.png")}/>
        <Sprite width={200} height={200} x={520} y={90} image={require("../../Assets/img/mountain_right.png")}/>
        <Sprite width={280} height={280} x={520} y={240} image={require("../../Assets/img/sideroad_right.png")}/>
        <RotatingBunny />
    </Stage>
  );
}

export default Game;
