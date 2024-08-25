import ButtonAccount from "@/components/ButtonAccount";
import Header from "@/components/Header";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
			</Suspense>
			<main className="min-h-screen p-8 pb-24">
				<section className="max-w-xl mx-auto space-y-8">
					<ButtonAccount />
					<h1 className="text-center mb-8">
						Dashboard - Okay this setup is cool
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h2 className="text-xl font-semibold mb-4">Total Users</h2>
							<p className="text-3xl font-bold">10,245</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h2 className="text-xl font-semibold mb-4">Revenue</h2>
							<p className="text-3xl font-bold">$52,369</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h2 className="text-xl font-semibold mb-4">Active Projects</h2>
							<p className="text-3xl font-bold">24</p>
						</div>
					</div>
					<div className="mt-8 bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
						<ul className="space-y-2">
							<li>User John Doe signed up</li>
							<li>New project {"Website Redesign"} created</li>
							<li>Payment of $500 received from Client X</li>
							<li>Task {"Update Documentation"} completed</li>
						</ul>
					</div>
					<div className="mt-8">
						<h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
						<div className="flex space-x-4">
							<button className="bg-blue-500 text-white px-4 py-2 rounded">
								Add User
							</button>
							<button className="bg-green-500 text-white px-4 py-2 rounded">
								Create Project
							</button>
							<button className="bg-purple-500 text-white px-4 py-2 rounded">
								Generate Report
							</button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
