import useInput from '../hooks/useInput';
import bg from '../assets/images/book-store-bg.jpg'


const Register = () => {
  const formData = {
    username: '',
    password: ''
  }

  const { input, inputChangeHandler, setInput } = useInput(formData);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!input.username || !input.password) {
      alert("Please enter a username and password.")
    }
    try {
      console.log(input)
    } catch (error) {

    }
  }
  return (
    <div className='min-h-screen justify-center flex flex-col'
    style={{
            backgroundImage: `url(${bg})`
          }}
    >

            {/* Background Blur Effect */}
       <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
      <div className='mx-auto z-10 max-w-2xl min-w-[500px] bg-stone-200 border-black border shadow-md p-10 rounded-md'>
        <h2 className='text-center text-3xl font-semibold my-3'>Create An Account</h2>
        <form onSubmit={onSubmit} className='grid grid-cols-1 w-full gap-2'>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Full Name</span>

            </div>
            <input
              onChange={(e) => inputChangeHandler(e)}
              required type="text" name="fullName" placeholder="Enter full Name..." className="input input-bordered input-info w-full " />

          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Email Address</span>
            </div>
            <input
              onChange={(e) => inputChangeHandler(e)}
              required name="email" type="email" placeholder="Enter email here..." className="input input-bordered input-info w-full " />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Phone Number</span>

            </div>
            <input
              onChange={(e) => inputChangeHandler(e)}
              required name="number" type="text" placeholder="Enter mobile number..." className="input input-bordered input-info w-full " />

          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Password</span>

            </div>
            <input
              onChange={(e) => inputChangeHandler(e)}
              required name="password" type="password" placeholder="Enter password..." className="input input-bordered input-info w-full " />

          </label>
          <div className='mt-5 flex justify-center'>
            <button type='submit' className="btn btn-primary">Create User</button>
          </div>

          <p className='text-center my-1'>--OR--</p>
          <a href={'/login'} className="link link-primary text-center">Login</a>


        </form>
      </div>
    </div>
  )
}

export default Register