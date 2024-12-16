import bg from '../assets/images/book-store-bg.jpg'
import useInput from '../hooks/useInput';

function Login() {
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
    <div className='min-h-screen  bg-cover bg-center  bg-white flex flex-col justify-center items-center'
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      {/* Background Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>

      <div className=' min-w-[512px] z-10 max-w-5xl mx-auto border shadow-md bg-stone-200/85 p-10 rounded-lg'>
        <h2 className='text-center text-3xl font-semibold my-3'>Login to your Account</h2>
        <form onSubmit={onSubmit} className='grid grid-cols-1 w-full gap-2'>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Email / Phone Number</span>
            </div>
            <input
              name="username"
              type="text"
              placeholder="Enter email here..."
              className="input input-bordered input-info w-full "
              onChange={(e) => inputChangeHandler(e)}
              required
            />

          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              name="password"
              type="password"
              placeholder="Enter password..."
              className="input input-bordered input-info w-full "
              onChange={(e) => inputChangeHandler(e)}
              required
            />
          </label>

          <div className='mt-5 flex justify-center'>
            <button type='submit' className="btn btn-primary">Login</button>
          </div>
          <p className='text-center my-1'>--OR--</p>
          <a href={'/register'} className="link link-primary text-center">Register new User</a>
        </form>
      </div>
    </div>
  )
}

export default Login