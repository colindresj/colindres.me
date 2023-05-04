const LineItem = ({ bullet, children }) => (
  <div className="pl-4">
    <span className="mr-1">{bullet}</span>
    {children}
  </div>
)

export default LineItem
