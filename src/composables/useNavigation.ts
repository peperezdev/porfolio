import { useRoute, useRouter } from 'vue-router'

export function useNavigation() {
    const router = useRouter()

    const goToHome = () => router.push({ name: 'Home' })
    const goToAbout = () => router.push({ name: 'About' })
    const goToProjects = () => router.push({ name: 'Projects' })
    const goToPatron = () => router.push({ name: 'Patron' })

    return {
        goToHome,
        goToAbout,
        goToProjects,
        goToPatron,
    }
}
