import { verifyToken } from '../lib/jwt';

export default function Dashboard({ user }) {
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <p>This is a protected dashboard page.</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const user = verifyToken(token);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}
