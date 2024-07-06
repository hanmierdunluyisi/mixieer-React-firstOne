//如果不移除监听器的情况
import { useEffect,useState } from "react"

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [mountCount, setMountCount] = useState(0);

  return (
    <div>
      <button onClick={() => {
        setShowComponent(!showComponent);
        setMountCount(prev => prev + 1);
      }}>
        Toggle Component (Mounted {mountCount} times)
      </button>
      
      {showComponent && <MyComponentWithoutCleanup />}
    </div>
  );
}
export default App

function MyComponentWithoutCleanup() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      console.log("Resize handled"); // 用于演示目的
    };

    window.addEventListener("resize", handleResize);
    console.log("Listener added");

    // 没有返回清理函数
  }, []);

  return (
    <div>
      <p>Window size: {width} x {height}</p>
    </div>
  );
}