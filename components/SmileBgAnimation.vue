<template>
    <div class="smile-bg">
        <div class="smile-bg__inner" ref="smileBg">
            <svg v-for="(img, index) in 100" :key="index" width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="smile-bg__icon">
                <path
                    d="M11.7958 22.2764C13.0824 23.2056 14.6417 23.7413 16.314 23.7206C17.9864 23.7 19.5319 23.1258 20.7951 22.1651"
                    stroke="#FDA301" stroke-width="1.5" stroke-linecap="round" />
                <path
                    d="M22.193 13.8972C22.2084 15.1391 21.5489 16.1553 20.7209 16.1656C19.893 16.1758 19.2086 15.1762 19.1932 13.9343C19.1779 12.6924 19.8374 11.6761 20.6653 11.6659C21.4932 11.6557 22.1776 12.6553 22.193 13.8972Z"
                    fill="" stroke="#FDA301" stroke-width="1.5" />
                <path
                    d="M11.7216 16.2769C12.55 16.2666 13.209 15.251 13.1937 14.0085C13.1783 12.7659 12.4943 11.767 11.666 11.7772C10.8376 11.7874 10.1785 12.803 10.1939 14.0456C10.2093 15.2881 10.8932 16.2871 11.7216 16.2769Z"
                    fill="" stroke="#FDA301" stroke-width="1.5" />
                <path
                    d="M8.56117 3.32195C10.824 1.97522 13.4027 1.25086 16.0358 1.22236C24.3196 1.11991 31.1177 7.75184 31.2201 16.0357C31.3226 24.3196 24.6906 31.1176 16.4068 31.2201C8.12291 31.3225 1.32488 24.6906 1.22242 16.4067C1.18865 13.6754 1.88739 11.1031 3.13652 8.88246"
                    stroke="#FDA301" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            smilesIcon: [],
        }
    },
    mounted() {

        function init() {
            const smiles = document.querySelectorAll('.smile-bg__icon')
            const wrapperSmile = document.querySelector('body')
            let width = wrapperSmile.clientWidth,
                height = wrapperSmile.clientHeight


            function setPositions() {

                for (let i = 0; i < smiles.length; i++) {

                    const element = smiles[i];
                    let x = Math.random() * width
                    let y = Math.random() * height

                    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()

                    element.style.transform = `translate(${x}px, ${y}px)`

                    // element.addEventListener('mouseover', () => {

                    //     element.style.transition = '0.3s ease-in-out'

                    //     element.style.boxShadow = `inset 0px 0px 6px 1px ${color}`

                    //     for (let p = 0; p < element.children.length; p++) {
                    //         const pp = element.children[p];
                    //         pp.style.stroke = `${color}`
                    //     }
                    // })
                    setTimeout(() => {
                        element.style.opacity = `0.08`
                    }, 1000)
                }
            }

            setPositions()

            function moveSmiles() {
                for (let i = 0; i < smiles.length; i++) {

                    const element = smiles[i];
                    let x = element.getBoundingClientRect().x,
                        y = element.getBoundingClientRect().y,
                        velocityX = Math.random() * (0.8 * 2) - 0.8,
                        velocityY = Math.random() * (0.8 * 2) - 0.8

                    function moving() {
                        x + velocityX > width && velocityX > 0 || x + velocityX < 0 && velocityX < 0 ? velocityX *= -1 : velocityX
                        y + velocityY > height && velocityY > 0 || y + velocityY < 0 && velocityY < 0 ? velocityY *= -1 : velocityY

                        x += velocityX
                        y += velocityY

                        element.style.transform = `translate(${x}px, ${y}px) `

                        window.requestAnimationFrame(moving)
                    }
                    moving()
                }
            }

            moveSmiles()

        }

        setTimeout(() => {
            init()
        }, 1000);
        window.addEventListener('resize', () => {
            init()
        })
    }
}
</script>

<style lang="scss">
.smile-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    // overflow: hidden;
    // z-index: -4;

    &__inner {
        width: 100%;
        height: 100%;
        position: relative;
    }

    &__icon {
        position: absolute;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        opacity: 0;
    }
}

@media (max-width: 992px) {
    .smile-bg {
        &__icon {
            width: 40px;
            height: 40px;
        }
    }
}

@media (max-width: 560px) {
    .smile-bg {
        &__icon {
            width: 30px;
            height: 30px;
        }
    }
}
</style>