
const Form = () => {
  return (
    <div>
        <form action="/api/form" method="post">
            <div class="form-item">
                <label htmlFor="first">First Name</label>
            </div>
            <div class="form-item">
                <input type="text" id="first" name="first" required />
            </div>
            <div class="form-item">
                <label htmlFor="first">First Name</label>
            </div>
            <div class="form-item">
                <input type="text" id="first" name="first" required />
            </div>
            <div class="form-item">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form