import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center text-text-secondary">
        <p className="mb-4">© 2026 {profile.name}. All rights reserved.</p>
        <p className="text-sm">Designed with ❤️ in {profile.location}</p>
      </div>
    </footer>
  )
}
