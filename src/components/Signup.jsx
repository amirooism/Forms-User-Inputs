export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault(); //Stop sending the automatically generated http request "We Put it to a onSubmit prop in the form element" :)
    //FormData is a constructor function, build in browser, it is an object that makes it easy to get different values entered the form
    //for using, we should pas the form as input to the FormData, and we can do it with pass event.target to it,
    // because the target of this event we pass to the handleSubmit is the <form> :)
    // all the input feilds or even select iput feilds must have the name attribute :) "To form data can give us access to the entered values"
    // new FormData(event.target);
    // put the result getting back from FormData to a const
    const fd = new FormData(event.target);
    //we can call with get method to exract the value for a spesefic name :)
    // fd.get('email')
    // const enteredEmail = fd.get("email");
    // now we can repet that for all the input
    // const enteredPassword = fd.get("password");
    // but we end with a lot of code here for every input
    //to getting all the enetr valuse in an object, use build in(Brwosers) objectClass and call fromEntries static method class and pass the formData object(fd) to it and call the entreis method to the object :
    // Object.fromEntries(fd.entries())
    //calling entreis give us an array fo the inputs and values, and calling the object.fromEntres, give us an object of these inputs
    const data = Object.fromEntries(fd.entries());
    // console.log(data);
    // after consol log you see "How did find us group input" is not on the log
    //they have the same name cause we want to find out what checked by the use, and they will lost when using entries method 
    // we manually extracting and stroing them with getAll() method, we get multiple values from an input with the name of the checkbox elements and pass it to getAll
    const acquisitionChannel = fd.getAll('acquisition')
    // now we have to merg it to the data object "By adding new property to it" :
data.acquisition = acquisitionChannel
console.log(data);

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
