import { Logo } from "../images/Logo";

export function Header() {
    return (
        <header className="flex justify-center items-center w-full py-5 bg-gray-700 border-b border-gray-600">
            <Logo />
        </header>
    )
}