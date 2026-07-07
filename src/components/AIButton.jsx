export default function AIButton({ children }) {
  return (
    <button className="ai-button">
      <div className="border-spin"></div>
      <span>✨ {children}</span>
    </button>
  )
}
