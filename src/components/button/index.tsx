type ButtonProps=  {
    label: string
}

export default function Button({label}:ButtonProps) {
    return(
        <button className="w-60 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
            <span className="text-sm font-bold text-white">
                {label}
            </span>
        </button>
    )
}

/* <Button label="nome do botao"/> */ 