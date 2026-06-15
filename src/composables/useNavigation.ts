import { useRouter } from 'vue-router'

export function useNavigation() {
  const router = useRouter()

  const goToHome = () => router.push({ name: 'Home' })
  const goToAbout = () => router.push({ name: 'About' })
  const goToProjects = () => router.push({ name: 'Projects' })
  const goToPatron = () => router.push({ name: 'Patron' })
  const goToProject = () => router.push({ name: 'Project' })

  return {
    goToHome,
    goToAbout,
    goToProjects,
    goToPatron,
    goToProject,
  }
}
