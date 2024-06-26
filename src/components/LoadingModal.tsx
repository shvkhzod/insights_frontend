
type ModalProps = {
    modalStatus: string
}
const LoadingModal = (props: ModalProps) => {
    return (
        <div class="w-[20rem] h-[8rem] bg-[#171717] flex flex-row items-center align-baseline justify-center p-[20px] rounded-[12px]">
             <svg class="w-12 h-12 mr-3 -ml-1 text-white animate-spin" xmlns="https://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
           
        </svg>
        <p class="text-white text-[24px] font-medium">{props.modalStatus}</p>
        </div>
    )
}

export default LoadingModal