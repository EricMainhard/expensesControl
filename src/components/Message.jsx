export const Message = ({children, type}) => {
  return (
    <div className={`message ${type}`}>
        {children}
    </div>
  )
}
