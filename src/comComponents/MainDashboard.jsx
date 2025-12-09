import Card from "./card";
function MainDashboard({ products }) {
  return (
    <main style={{ padding: "16px" }}>
      <h2>Главная панель</h2>
      <p>Здесь в будущем будет список задач, статистика и другие виджеты.</p>

      <div
        style={{
          marginTop: "16px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
        }}
      >
        <h3>Пример блока</h3>
        <p>Это просто заглушка, чтобы увидеть структуру страницы.</p>
      </div>

      <h3 style={{ marginTop: "24px" }}>Товары</h3>
      <Card products={products} />
    </main>
  );
}

export default MainDashboard;
