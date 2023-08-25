function Footer() {
  return (
    <footer className=" text-black ">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <img src="/Majestic Cars Footer.png" alt="" className="h-40 " />
        </div>
        <div>
          <h3>&copy; 2023 MajesticCars. All Right Reserved</h3>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-gray-400">
            Kontak
          </a>
          <a href="#" className="hover:text-gray-400">
            Kebijakan Privasi
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
