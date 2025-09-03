export default function NewsletterSignUp ({ email, setEmail }) {
    return (
        <form className="mt-4 max-w-md">
        <label htmlFor="email" className="sr-only">Email</label>
        <p className="text-white/60">Enter your email here *</p>
        <input className="min-w-[400px] w-full focus:bg-white/30 h-[40px] focus:border-0 focus:ring-0 outline-0 p-2 border-b-1 border-white" value={email} onChange={e => setEmail(e.target.value)} />
        <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mt-3 flex items-center gap-3">
            <input type="checkbox" className="!bg-transparent" required />
            <label htmlFor="subscribe" className="text-md">Yes, subscribe me to your<br/> newsletter. *</label>
            </div>
            <button type="button" className="mt-4 bg-black px-10 py-2 text-sm text-white">Submit</button>
        </div>
        </form>
    )
}