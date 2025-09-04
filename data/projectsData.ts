interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Webpack 4.0 进阶指南',
    description: `深入理解 Webpack 4.0 的核心原理和高级配置技巧。从基础配置到性能优化，
    帮助你构建高效的前端工程化解决方案。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/Webpack/Webpack4-0进阶',
  },
  {
    title: '代码质量与重构实践',
    description: `基于《Clean Code》和《重构》的代码质量提升实践。从代码坏味道识别到
    重构技巧应用，全面提升你的代码质量和编程能力。`,
    imgSrc: '/static/images/ocean.jpeg',
    href: '/blog/代码质量/《Clean-Code》--原则、模式和实践',
  },
]

export default projectsData
