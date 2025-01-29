import Link from 'next/link';

export default function page() {
    return(
        <div>
        <h1>Your Name: [Saheed Adewale]</h1>
        <p>
          GitHub Repository:{' '}
          <Link href="https://github.com/SomoADE">
            Go to my GitHub
          </Link>
        </p>
      </div>

    )
}