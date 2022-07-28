
const Form = () => {
  return (
    <div>
        <form action="/api/form" method="post">
            <div className="form-item">
                <label htmlFor="first">First Name</label>
            </div>
            <div className="form-item">
                <input type="text" id="first" name="first" required />
            </div>
            <div className="form-item">
                <label htmlFor="last">First Name</label>
            </div>
            <div className="form-item">
                <input type="text" id="last" name="first" required />
            </div>
            <div className="form-item">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form