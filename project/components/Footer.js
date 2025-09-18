import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-16 h-screen">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-600">
        
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold text-black mb-4">About Us</h3>
          <p className="mb-2">
            Mauris vitae ultricies leo integer malesuada. Odio tempor orci dapibus ultrices in. 
            Egestas diam in arcu cursus euismod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-bold text-black mb-4">Account</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>My Account</li>
            <li>My Wishlist</li>
            <li>My Cart</li>
            <li>Sign in</li>
            <li>Check out</li>
          </ul>
        </div>

        {/* Shipping */}
        <div>
          <h3 className="text-lg font-bold text-black mb-4">Shipping</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>New Products</li>
            <li>Best Sellers</li>
            <li>Manufacturers</li>
            <li>Suppliers</li>
            <li>Specials</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold text-black mb-4">Contact Us</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Phone: (+63) 555 1212</li>
            <li>Fax: (+63) 555 0100</li>
            <li>New York,</li>
            <li>96th Street, NY 10129</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 mt-5 py-10 text-center">
        <Link href={'/'} className="text-3xl font-bold mb-2 cursor-pointer">UrbanAura</Link>
        <div className="border-b border-gray-100 w-full mb-10 mt-20"></div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} UrbanAura. All rights reserved Created By ❤️ By Talha.</p>
      </div>
    </footer>
  );
}
