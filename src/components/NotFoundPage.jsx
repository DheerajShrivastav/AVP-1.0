import {PageNotFound} from '../assets'
function NotFoundPage() {
  return (
    <div className="text-white">
      <h1>404</h1>
      <div className="w-[100%] h-[100%] pb-[100%] relative ">
    
        <img
          src={PageNotFound}
          alt="Page not found"
          className="absolute w-full h-full"
        />
      </div>

      <p>Page not found</p>
    </div>
  )
}

export default NotFoundPage
