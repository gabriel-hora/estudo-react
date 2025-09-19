import "./MyComponents.css";

const MyComponents = () => {
  const n = false;

  return (
    <div>
      <h2>MyComponents</h2>
      <p className="my-component-p">Este é o estilo do MyComponents</p>
      <h2 style={n ? { color: "purple" } : { color: "pink" }}>CSS DINAMINO</h2>
    </div>
  );
};

export default MyComponents;
