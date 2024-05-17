import Info from "./info";

export default function AboutLayout({children}) {
    return (
        <div>
            <div>
                {children}
            </div>
            <Info />
        </div>
    )
}