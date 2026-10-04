import { asset } from '../lib/img'

export const levels = ['Beginner', 'Intermediate', 'Advanced']

export const allCategories = [
  'Design',
  'Development',
  'Business',
  'Marketing',
  'Data',
  'Photography',
  'Music',
  'Finance',
]

export const courses = [
  { slug: 'figma-interface-foundations', title: 'Figma Interface Foundations', author: 'PurePearl Studio', creator: 'PurePearl Studio', category: 'Design', price: 25, rating: '4.8', reviewsCount: 342, students: 4820, lessons: 24, duration: '3 hours 10 mins', comments: 86, level: 'Beginner', hue: 222, image: asset('images/courses/figma-interface-foundations.jpg') },
  { slug: 'design-systems-in-practice', title: 'Design Systems in Practice', author: 'Mara Voss', creator: 'Mara Voss', category: 'Design', price: 39, rating: '4.9', reviewsCount: 518, students: 7310, lessons: 32, duration: '5 hours 5 mins', comments: 143, level: 'Intermediate', hue: 262, image: asset('images/courses/design-systems-in-practice.jpg') },
  { slug: 'react-from-components-to-hooks', title: 'React: Components to Hooks', author: 'Devon Akter', creator: 'Devon Akter', category: 'Development', price: 45, rating: '4.7', reviewsCount: 891, students: 12400, lessons: 48, duration: '8 hours 20 mins', comments: 231, level: 'Intermediate', hue: 210, image: asset('images/courses/react-from-components-to-hooks.jpg') },
  { slug: 'python-data-analysis-bootcamp', title: 'Python Data Analysis Bootcamp', author: 'Lena Okafor', creator: 'Lena Okafor', category: 'Data', price: 49, rating: '4.8', reviewsCount: 664, students: 9800, lessons: 56, duration: '10 hours 45 mins', comments: 198, level: 'Beginner', hue: 160, image: asset('images/courses/python-data-analysis-bootcamp.jpg') },
  { slug: 'startup-finance-essentials', title: 'Startup Finance Essentials', author: 'Marcus Reid', creator: 'Marcus Reid', category: 'Finance', price: 35, rating: '4.6', reviewsCount: 214, students: 3210, lessons: 21, duration: '3 hours 40 mins', comments: 59, level: 'Beginner', hue: 42, image: asset('images/courses/startup-finance-essentials.jpg') },
  { slug: 'brand-storytelling-that-sells', title: 'Brand Storytelling That Sells', author: 'PurePearl Studio', creator: 'PurePearl Studio', category: 'Marketing', price: 29, rating: '4.7', reviewsCount: 187, students: 4150, lessons: 18, duration: '2 hours 50 mins', comments: 74, level: 'Beginner', hue: 330, image: asset('images/courses/brand-storytelling-that-sells.jpg') },
  { slug: 'product-photography-masterclass', title: 'Product Photography Masterclass', author: 'Jonas Feld', creator: 'Jonas Feld', category: 'Photography', price: 42, rating: '4.8', reviewsCount: 296, students: 5280, lessons: 27, duration: '4 hours 15 mins', comments: 112, level: 'Intermediate', hue: 20, image: asset('images/courses/product-photography-masterclass.jpg') },
  { slug: 'freelance-business-playbook', title: 'Freelance Business Playbook', author: 'Aisha Bello', creator: 'Aisha Bello', category: 'Business', price: 33, rating: '4.6', reviewsCount: 158, students: 2870, lessons: 22, duration: '3 hours 25 mins', comments: 61, level: 'Beginner', hue: 90, image: asset('images/courses/freelance-business-playbook.jpg') },
  { slug: 'sql-for-product-analytics', title: 'SQL for Product Analytics', author: 'Lena Okafor', creator: 'Lena Okafor', category: 'Data', price: 38, rating: '4.9', reviewsCount: 402, students: 6940, lessons: 30, duration: '5 hours 30 mins', comments: 129, level: 'Intermediate', hue: 190, image: asset('images/courses/sql-for-product-analytics.jpg') },
  { slug: 'motion-design-with-after-effects', title: 'Motion Design with After Effects', author: 'Mara Voss', creator: 'Mara Voss', category: 'Design', price: 55, rating: '4.7', reviewsCount: 243, students: 3690, lessons: 36, duration: '6 hours 40 mins', comments: 97, level: 'Advanced', hue: 280, image: asset('images/courses/motion-design-with-after-effects.jpg') },
  { slug: 'music-production-fundamentals', title: 'Music Production Fundamentals', author: 'Theo Lindqvist', creator: 'Theo Lindqvist', category: 'Music', price: 31, rating: '4.5', reviewsCount: 131, students: 2140, lessons: 19, duration: '3 hours 5 mins', comments: 48, level: 'Beginner', hue: 350, image: asset('images/courses/music-production-fundamentals.jpg') },
  { slug: 'advanced-react-performance', title: 'Advanced React Performance', author: 'Devon Akter', creator: 'Devon Akter', category: 'Development', price: 59, rating: '4.8', reviewsCount: 327, students: 4460, lessons: 28, duration: '5 hours 55 mins', comments: 104, level: 'Advanced', hue: 232, image: asset('images/courses/advanced-react-performance.jpg') },
]

export const creators = {
  'PurePearl Studio': { name: 'PurePearl Studio', tagline: 'Passionate UI/UX, Web designer', followers: 12400, products: 3, image: asset('images/creator-purepearl.jpg') },
  'Mara Voss': { name: 'Mara Voss', tagline: 'Design systems lead, ex-fintech', followers: 8200, products: 2, image: asset('images/avatar-3.jpg') },
  'Devon Akter': { name: 'Devon Akter', tagline: 'Full-stack engineer & educator', followers: 15300, products: 2, image: asset('images/avatar-2.jpg') },
  'Lena Okafor': { name: 'Lena Okafor', tagline: 'Data analyst, Python instructor', followers: 9700, products: 2, image: asset('images/avatar-1.jpg') },
}

export const images = {
  heroStudent: asset('images/hero-student.jpg'),
  courseCover: asset('images/course-preview.jpg'),
  growthStudent: asset('images/growth-student.jpg'),
  manageCreator: asset('images/manage-creator.jpg'),
  avatars: [asset('images/avatar-1.jpg'), asset('images/avatar-2.jpg'), asset('images/avatar-3.jpg')],
  reviewers: [asset('images/reviewer-1.jpg'), asset('images/reviewer-2.jpg'), asset('images/reviewer-3.jpg'), asset('images/reviewer-4.jpg')],
}

export function initials(name = '') {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
