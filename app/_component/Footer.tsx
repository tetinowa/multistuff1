export const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-indigo-700 rounded-sm" />
              </div>
              <h1 className="font-bold text-lg italic">Movie Z</h1>
            </div>
            <p className="text-sm text-indigo-200">© 2024 Movie Z. All Rights Reserved.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-sm text-indigo-200">Email:</p>
            <p className="text-sm">support@moviez.com</p>
            <p className="text-sm text-indigo-200 mt-2">Phone:</p>
            <p className="text-sm">+976 123 456 7890</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-indigo-200">Facebook</a>
              <a href="#" className="hover:text-indigo-200">Instagram</a>
              <a href="#" className="hover:text-indigo-200">Twitter</a>
              <a href="#" className="hover:text-indigo-200">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};