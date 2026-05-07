"use client"

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12 px-8 md:px-[60px] border-t border-cream/20">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Left: Name + Title */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Rizwan</h3>
          <p className="text-sm text-cream/70">Automation Consultant & Workflow Strategist</p>
        </div>

        {/* Center: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <div className="flex flex-col gap-2">
            <a href="mailto:riz@withsoch.com" className="hover:text-coral transition-colors">
              riz@withsoch.com
            </a>
            <a
              href="https://linkedin.com/in/consult-with-riz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coral transition-colors"
            >
              linkedin.com/in/consult-with-riz
            </a>
          </div>
        </div>

        {/* Right: Follow */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow</h4>
          <div className="flex flex-col gap-2">
            <a
              href="https://linkedin.com/in/consult-with-riz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-coral transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.143 0 2.07.926 2.07 2.07 0 1.143-.927 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.771v20.451C0 23.229.792 24 1.771 24h20.451C23.229 24 24 23.229 24 22.222V1.771C24 .771 23.229 0 22.225 0z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://withsoch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coral transition-colors"
            >
              withsoch.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-cream/60">
        © {new Date().getFullYear()} Rizwan. All rights reserved.
      </div>
    </footer>
  )
}
