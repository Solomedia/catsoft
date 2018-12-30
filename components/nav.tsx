import Link from 'next/link';

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link prefetch={true} href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link prefetch={true} href="/test">
					<a>Test Page</a>
				</Link>
			</li>
		</ul>
	</nav>
);

export default Nav;
