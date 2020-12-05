function icon(children: JSX.Element) {
  return ({ size = 24, viewBox = "0 0 24 24" }) => (
    <svg viewBox={viewBox} width={size} height={size}>
      {children}
    </svg>
  )
}

export const TurbochargerIcon = ({ size = 58, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 58 58" {...props}>
    <path d="M0 58v-1.933h2.9v-26.1a.89.89 0 01.022-.108c-.01-.285-.022-.569-.022-.859a25.914 25.914 0 012.811-11.755l-1.985-6.611a5.546 5.546 0 016.908-6.908l6.609 1.985A25.924 25.924 0 0129 2.9h27.067V0H58v21.267h-1.933v-2.9h-3.231A26.2 26.2 0 0155.1 29a25.925 25.925 0 01-2.81 11.755l1.984 6.612a5.546 5.546 0 01-6.908 6.907l-6.61-1.984a26.017 26.017 0 01-24.324-.424v4.2h2.9V58zm4.833-1.933H14.5v-1.933H4.833zm12.8-48.383c-.43.229-.85.472-1.263.724a35.5 35.5 0 00-1.268.838q-.509.357-1 .743c-.177.138-.355.275-.527.418q-.366.305-.721.625c-.105.1-.209.193-.312.29q-.629.586-1.215 1.215c-.1.1-.193.207-.29.312q-.32.354-.625.721c-.143.173-.281.35-.418.527q-.386.487-.743 1a17.5 17.5 0 00-.5.742c-.113.175-.228.349-.337.526-.253.413-.5.833-.724 1.263a24.015 24.015 0 00-2.85 11.37c0 .311.012.62.024.93a24.1 24.1 0 002.489 9.784l.028.059c.187.376.387.745.594 1.111.048.084.1.167.145.251.175.3.356.6.55.9.066.1.128.2.193.3.2.3.41.6.625.894.053.073.1.148.158.22a22.12 22.12 0 001.184 1.454c.148.165.291.329.439.491a22.049 22.049 0 00.905.926c.173.167.345.335.521.5.15.138.306.27.458.4q.432.375.881.732c.2.154.39.31.59.459.167.124.337.242.508.361.2.141.4.282.609.417a24.1 24.1 0 0024.634 1.131q.645-.344 1.263-.725c.178-.109.352-.224.527-.338.251-.163.5-.332.741-.5q.51-.358 1-.743c.176-.139.354-.275.527-.418q.366-.307.721-.625c.106-.1.209-.193.312-.29q.63-.586 1.216-1.216c.1-.1.193-.206.29-.312q.32-.354.625-.721c.143-.173.28-.35.419-.526q.385-.49.743-1c.172-.243.341-.49.5-.741.113-.176.229-.349.338-.527q.381-.618.725-1.263a24.087 24.087 0 00.373-22h-9.183a16.48 16.48 0 11-1.874-1.873v-.06h8.7V4.84h-19.36A24.017 24.017 0 0017.63 7.683zm33.046 35.842l-.092.136a25.986 25.986 0 01-6.929 6.929l-.135.092c-.143.1-.285.193-.433.29l4.839 1.45a3.609 3.609 0 004.495-4.5l-1.455-4.833c-.093.145-.196.29-.293.435zM4.836 52.201H14.5v-1.5c-.028-.019-.053-.04-.081-.059a29.58 29.58 0 01-1.766-1.313q-.5-.406-.989-.839a26.036 26.036 0 01-.545-.5q-.423-.4-.825-.812c-.15-.156-.3-.311-.447-.469a28.15 28.15 0 01-1.008-1.152c-.094-.115-.181-.235-.277-.353q-.418-.524-.806-1.069c-.082-.115-.167-.229-.247-.346q-.485-.7-.923-1.436c-.032-.057-.063-.114-.1-.171q-.441-.751-.828-1.524l-.041-.08q-.421-.849-.781-1.728zM14.5 29A14.5 14.5 0 1029 14.5 14.5 14.5 0 0014.5 29zm35.767-12.567h5.8v-11.6h-5.8zM7.991 5.579a3.608 3.608 0 00-2.413 4.5l1.455 4.833c.091-.143.194-.288.29-.433l.092-.135a26 26 0 016.929-6.929l.136-.092c.143-.1.284-.193.433-.29l-4.839-1.451a3.611 3.611 0 00-2.083 0zm40.342 44.688v-1.933h1.933v1.933zm-20.8-8.8c-.131-.014-.258-.039-.387-.059a14.52 14.52 0 01-1.07-.2 13.47 13.47 0 01-1.445-.441c-.122-.045-.243-.086-.364-.134a12.67 12.67 0 01-1.282-.6c-.011-.007-.025-.012-.037-.019-.192-.105-.373-.228-.558-.343-.149-.093-.293-.172-.448-.276s-.3-.222-.445-.334c-.184-.137-.371-.269-.545-.417-.094-.077-.178-.163-.268-.243-.222-.2-.443-.394-.65-.606-.044-.042-.084-.094-.126-.139a12.46 12.46 0 01-.7-.792l-.048-.062a13.21 13.21 0 01-.677-.937l-.023-.04q-.321-.491-.6-1.016c-.013-.024-.023-.05-.037-.076a12.67 12.67 0 01-.476-1.031c-.019-.043-.033-.093-.05-.139a12.805 12.805 0 01-.356-1.026l-.009-.029a8.445 8.445 0 01-.14-.553 12.52 12.52 0 01-.166-.784c-.033-.22-.068-.44-.1-.661-.015-.135-.032-.271-.043-.407a12.025 12.025 0 01-.057-1.105 12.841 12.841 0 01.092-1.463c.014-.131.039-.258.059-.387.054-.361.121-.718.2-1.07q.051-.208.108-.414c.1-.354.209-.693.333-1.031.046-.122.086-.244.134-.365a12.388 12.388 0 01.6-1.281l.018-.038c.092-.165.193-.307.3-.483s.21-.358.327-.528.223-.3.336-.448c.134-.185.275-.374.424-.552l.29-.321c.187-.207.374-.414.573-.607.073-.07.15-.135.226-.2.236-.22.477-.434.731-.635.051-.041.106-.078.158-.119.283-.219.574-.427.876-.621l.109-.067c.32-.2.649-.39.988-.562l.089-.043q.52-.259 1.063-.471l.1-.033q.543-.207 1.11-.363l.033-.011c.022-.006.046-.009.069-.014q.529-.142 1.076-.239c.072-.013.142-.021.212-.031.313-.049.629-.09.949-.115.146-.012.291-.014.436-.022.181-.008.361-.028.544-.028.069 0 .136.011.2.011.209 0 .424.017.621.031s.4.021.591.043c.234.026.464.068.7.106.168.029.338.051.5.087.243.052.486.121.727.187.148.041.3.075.445.121.257.085.506.181.758.278.123.044.251.088.372.14.286.122.565.262.842.405.078.041.161.075.238.117.014.008.03.014.044.023.2.107.378.233.572.352.142.089.292.17.432.266.16.109.309.23.464.346.176.133.357.261.527.4.1.082.185.172.282.257.217.192.433.385.636.592.048.049.09.1.138.15.238.252.471.51.689.78.019.023.036.05.06.076.237.3.461.606.671.925.011.016.019.032.03.049.211.33.409.661.59 1.007.015.027.026.056.04.083.172.335.331.675.473 1.025.019.045.033.1.052.142.131.335.252.675.355 1.023l.01.029c.053.184.1.368.139.553.063.257.12.518.166.784.034.22.068.439.1.661.015.136.031.271.043.408.033.368.056.736.056 1.1a12.414 12.414 0 01-.088 1.463c-.014.129-.039.255-.058.382-.054.362-.121.72-.2 1.072-.033.139-.069.275-.107.413a10.407 10.407 0 01-.333 1.031c-.046.122-.085.245-.135.365a12.333 12.333 0 01-.6 1.279l-.018.039c-.121.214-.258.415-.387.62-.08.131-.152.263-.237.386-.115.169-.236.322-.366.49s-.252.34-.387.5c-.086.108-.183.2-.274.3-.187.211-.374.424-.574.617-.054.055-.112.1-.167.151-.247.235-.5.464-.765.677-.027.022-.057.041-.084.064-.3.234-.6.456-.916.663-.018.013-.036.023-.055.034q-.485.316-1 .588l-.086.041c-.333.171-.673.33-1.021.472-.046.019-.1.033-.142.052-.336.131-.676.252-1.024.355l-.029.01c-.183.053-.367.094-.551.139-.258.063-.519.12-.784.166-.22.034-.44.068-.661.1-.135.015-.271.031-.407.043-.368.033-.737.056-1.105.056a12.474 12.474 0 01-1.458-.09zm-2.635-7a2.913 2.913 0 00-.82 2.461l.226 1.6.2.1q.47.219.953.391c.085.033.167.068.253.1a10.458 10.458 0 001.257.327c.084.017.171.024.256.039q.513.088 1.032.123c.135.009.271.02.406.02a10.123 10.123 0 001.07-.02v-.007h.175c-.067-.052-.131-.112-.194-.168s-.121-.1-.194-.171-.143-.152-.2-.217-.114-.117-.176-.194-.121-.168-.175-.238a2.515 2.515 0 01-.151-.209c-.054-.085-.1-.175-.15-.264-.04-.073-.085-.142-.122-.217-.046-.1-.084-.193-.124-.29-.034-.075-.069-.146-.1-.22-.04-.1-.068-.207-.1-.311-.022-.073-.048-.145-.065-.219-.028-.117-.044-.237-.064-.355-.009-.065-.026-.127-.033-.193a4.848 4.848 0 01-.033-.559v-4.033c-.046-.017-.091-.038-.135-.057l-.046-.018c-.034-.015-.069-.027-.1-.043zm5.25-2.806l-.046.02c-.046.018-.089.04-.136.056v4.031a2.919 2.919 0 001.16 2.32l1.294.97.078-.029a10.353 10.353 0 001.175-.493l.129-.062a10.726 10.726 0 002.233-1.517c.06-.053.12-.106.178-.162a10.557 10.557 0 00.833-.859v-.007a1.07 1.07 0 00.077-.087 4.612 4.612 0 01-.581.037h-.056a4.771 4.771 0 01-.847-.084l-.085-.013a4.928 4.928 0 01-.806-.244 3.041 3.041 0 01-.132-.054 4.758 4.758 0 01-.734-.387l-.107-.074a4.858 4.858 0 01-.676-.553l-2.851-2.85c-.032.014-.066.026-.1.04zm-10.235-.534l-.968 1.3c.008.027.019.052.029.078a10.533 10.533 0 00.494 1.177l.06.125a10.81 10.81 0 001.527 2.239c.051.058.1.114.156.17a10.728 10.728 0 00.87.845c.025.022.049.047.076.068-.012-.086-.013-.176-.019-.262s-.017-.169-.017-.254c0-.1.011-.205.011-.309 0-.082 0-.164.012-.246.011-.105.03-.209.047-.312.013-.078.022-.156.038-.234.022-.106.056-.209.086-.311.02-.074.037-.149.061-.221.035-.1.08-.206.122-.308.028-.068.051-.138.083-.206.049-.105.11-.211.167-.308.033-.059.061-.121.1-.178.067-.109.144-.212.22-.315.032-.044.061-.1.1-.141v-.006a4.746 4.746 0 01.372-.423l2.851-2.85c-.016-.029-.027-.064-.042-.1l-.021-.049c-.019-.045-.04-.088-.055-.134h-4.031a2.916 2.916 0 00-2.329 1.164zm11.764-1.021l-.019.047c-.014.033-.026.068-.042.1l2.85 2.851a2.919 2.919 0 002.461.82l1.6-.229c.039-.08.078-.159.116-.24.1-.217.193-.436.277-.658.047-.125.1-.255.143-.386.085-.247.155-.5.22-.75.03-.116.064-.23.09-.348.063-.282.108-.563.148-.853.013-.1.034-.193.045-.29a10.619 10.619 0 00.067-1.16c0-.306-.021-.607-.047-.906-.052.067-.112.127-.168.193v-.01c-.058.066-.1.121-.167.193s-.152.143-.217.2-.117.114-.194.175-.168.122-.238.176a2.333 2.333 0 01-.209.15c-.085.055-.176.1-.264.151-.073.041-.142.085-.217.121-.1.047-.193.085-.29.125-.075.033-.146.069-.22.1-.1.04-.207.067-.311.1-.073.021-.145.047-.219.065-.117.028-.237.044-.355.063-.065.01-.127.026-.193.034a5.048 5.048 0 01-.559.033h-4.033a1.042 1.042 0 01-.055.133zm-3.568-1.474a.976.976 0 00.341 1.144 1.057 1.057 0 00.176.118.971.971 0 00.748 0 1.048 1.048 0 00.176-.118.975.975 0 00.223-.223 1.107 1.107 0 00.119-.176.971.971 0 000-.748 1.065 1.065 0 00-.119-.176.973.973 0 00-.223-.223 1.047 1.047 0 00-.176-.118.97.97 0 00-.748 0 1.056 1.056 0 00-.176.118.947.947 0 00-.208.2 1.017 1.017 0 00-.133.202zm-7.037-4.55l-1.6.229a10.488 10.488 0 00-.394.9c-.049.13-.1.257-.141.386-.084.25-.157.5-.222.756-.029.115-.063.228-.088.344a9.93 9.93 0 00-.149.859c-.013.091-.033.187-.043.283a10.644 10.644 0 00-.068 1.16c0 .307.021.607.047.913.052-.067.113-.129.169-.193v-.006c.057-.066.1-.12.167-.192s.15-.146.217-.2.116-.11.194-.174.17-.123.24-.176a2.523 2.523 0 01.208-.15c.085-.054.175-.1.263-.15.072-.041.142-.086.216-.122.1-.047.193-.084.29-.124.073-.035.145-.07.219-.1.1-.04.209-.067.314-.1.073-.022.143-.047.216-.064.117-.028.237-.044.355-.064.066-.01.129-.026.194-.033a4.825 4.825 0 01.559-.033h4.031c.015-.045.036-.089.055-.133l.021-.05c.015-.029.026-.064.042-.1l-2.851-2.851a2.906 2.906 0 00-2.052-.849 2.973 2.973 0 00-.41.033zm14.787-2.946c.005.084.017.167.017.251 0 .1-.005.205-.011.307 0 .084 0 .166-.012.248-.009.1-.029.2-.046.305-.013.08-.022.161-.039.241-.022.1-.053.2-.081.3-.022.078-.04.158-.066.235-.033.1-.075.193-.114.29-.03.076-.057.153-.092.228-.045.1-.1.182-.15.278-.038.069-.071.141-.113.208-.056.1-.126.187-.193.284-.04.057-.077.117-.12.172a5.118 5.118 0 01-.372.418l-2.85 2.85c.016.034.028.069.042.1l.02.047c.018.045.04.089.056.135h4.031a2.914 2.914 0 002.32-1.16l.969-1.282v-.013a.438.438 0 00-.03-.078 10.491 10.491 0 00-.493-1.175c-.022-.042-.04-.086-.062-.129a10.756 10.756 0 00-1.529-2.238c-.053-.06-.106-.12-.161-.178a10.752 10.752 0 00-.859-.833c-.028-.025-.054-.052-.084-.076.014.088.015.18.021.264zm-14.388.986c.024 0 .048.008.071.008a4.872 4.872 0 01.84.082l.046.007a4.952 4.952 0 01.816.247l.131.052a4.822 4.822 0 01.733.387c.039.025.076.052.113.078a4.858 4.858 0 01.677.551l2.85 2.851c.034-.016.069-.028.1-.042l.047-.02c.045-.018.089-.04.135-.056v-4.543a2.882 2.882 0 00-1.6-2.592l-.561-.28a10.387 10.387 0 00-1.4.545l-.045.022a10.682 10.682 0 00-2.429 1.6c-.054.04-.1.091-.15.136a10.84 10.84 0 00-.9.925l-.071.076a.9.9 0 01.177-.012 3.91 3.91 0 01.374-.023zm7.313-3.744c-.05 0-.1.006-.147.006.026.028.046.061.071.09a4.686 4.686 0 01.409.515c.029.048.066.091.1.139a4.894 4.894 0 01.374.718c.025.06.044.123.067.186a4.844 4.844 0 01.184.619c.017.077.034.153.048.23a4.782 4.782 0 01.081.84v4.544c.047.016.09.037.136.056l.046.019c.034.014.069.026.1.043l2.851-2.851a2.909 2.909 0 00.819-2.46l-.228-1.6c-.076-.037-.149-.073-.225-.108a11.18 11.18 0 00-.742-.311c-.13-.044-.257-.1-.387-.141a10.579 10.579 0 00-.862-.242c-.1-.024-.2-.057-.3-.077a10.323 10.323 0 00-1.151-.175c-.138-.014-.277-.014-.416-.021a8.225 8.225 0 00-.629-.022zM6.767 29A22.257 22.257 0 0129 6.767V8.7A20.321 20.321 0 008.7 29zm.967-19.333V7.734h1.933v1.933zm23.2-.967V6.767h1.934V8.7z" fill="currentColor" />
  </svg>
);

export const AccountOutlineIcon = icon(<path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />);
export const AccountTieIcon = icon(<path fill="currentColor" d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" />);
export const AccountTieOutlineIcon = icon(<path fill="currentColor" d="M16.36 12.76C18.31 13.42 20 14.5 20 16V21H4V16C4 14.5 5.69 13.42 7.65 12.76L8.27 14L8.5 14.5C7 14.96 5.9 15.62 5.9 16V19.1H10.12L11 14.03L10.06 12.15C10.68 12.08 11.33 12.03 12 12.03C12.67 12.03 13.32 12.08 13.94 12.15L13 14.03L13.88 19.1H18.1V16C18.1 15.62 17 14.96 15.5 14.5L15.73 14L16.36 12.76M12 5C10.9 5 10 5.9 10 7C10 8.1 10.9 9 12 9C13.1 9 14 8.1 14 7C14 5.9 13.1 5 12 5M12 11C9.79 11 8 9.21 8 7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7C16 9.21 14.21 11 12 11Z" />);
export const AccountHardHatIcon = icon(<path fill="currentColor" d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z" />);
export const CarTurbochargerIcon = icon(<path fill="currentColor" d="M22 13V15H18.32C18.75 14.09 19 13.08 19 12C19 8.14 15.86 5 12 5H2V3H12C16.97 3 21 7.03 21 12C21 12.34 20.97 12.67 20.94 13H22M12 19C8.14 19 5 15.86 5 12C5 10.93 5.25 9.91 5.69 9H2V11H3.06C3.03 11.33 3 11.66 3 12C3 16.97 7.03 21 12 21H22V19H12M16.86 12.2C15.93 12.94 14.72 12.47 14 12.05V12C16.79 10.31 15.39 7.89 15.39 7.89S14.33 6.04 14.61 7.89C14.78 9.07 13.76 9.88 13.04 10.3L13 10.28C12.93 7 10.13 7 10.13 7S8 7 9.74 7.69C10.85 8.13 11.04 9.42 11.05 10.25L11 10.28C8.14 8.7 6.74 11.12 6.74 11.12S5.67 12.97 7.14 11.8C8.07 11.07 9.28 11.54 10 11.95V12C7.21 13.7 8.61 16.12 8.61 16.12S9.67 17.97 9.4 16.11C9.22 14.94 10.25 14.13 10.97 13.7L11 13.73C11.07 17 13.87 17 13.87 17S16 17 14.26 16.31C13.15 15.87 12.96 14.58 12.95 13.75L13 13.73C15.86 15.31 17.26 12.88 17.26 12.88S18.33 11.04 16.86 12.2Z" />);
export const CheckIcon = icon(<path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />);
export const CheckCircleOutlineIcon = icon(<path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />);
export const CheckboxBlankCircleOutline = icon(<path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />);
export const CircleMediumIcon = icon(<path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />);
export const ClipboardCheckOutlineIcon = icon(<path fill="currentColor" d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M7.5,13.5L9,12L11,14L15.5,9.5L17,11L11,17L7.5,13.5Z" />);
export const ClockOutlineIcon = icon(<path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />);
export const CloseIcon = icon(<path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />);
export const CommentTextOutlineIcon = icon(<path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z" />);
export const FaceAgentIcon = icon(<path fill="currentColor" d="M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z" />);
export const MagnifyIcon = icon(<path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />);
export const MenuIcon = icon(<path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />);
export const PlusIcon = icon(<path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />);
export const ProgressWrenchIcon = icon(<path fill="currentColor" d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M16.82,15.19L12.71,11.08C13.12,10.04 12.89,8.82 12.03,7.97C11.13,7.06 9.78,6.88 8.69,7.38L10.63,9.32L9.28,10.68L7.29,8.73C6.75,9.82 7,11.17 7.88,12.08C8.74,12.94 9.96,13.16 11,12.76L15.11,16.86C15.29,17.05 15.56,17.05 15.74,16.86L16.78,15.83C17,15.65 17,15.33 16.82,15.19Z" />);
export const TuneIcon = icon(<path fill="currentColor" d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />);
export const TuneVericalIcon = icon(<path fill="currentColor" d="M7 3H5V9H7V3M19 3H17V13H19V3M3 13H5V21H7V13H9V11H3V13M15 7H13V3H11V7H9V9H15V7M11 21H13V11H11V21M15 15V17H17V21H19V17H21V15H15Z" />);
