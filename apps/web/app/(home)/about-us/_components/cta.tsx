import JoinWaitList from 'components/form/waitlist';

export default function CTA() {
	return (
		<div>
			<section className='py-20 border-t border-dashed text-center px-6'>
				<div className='container max-w-xl mx-auto space-y-6'>
					<h3 className='text-3xl md:text-4xl font-bold'>Ready to start learning for free?</h3>
					<p className='text-muted-foreground text-lg'>
						Join the waitlist and be part of the launch community. No spam. No fluff. Just real learning.
					</p>
					<JoinWaitList />
				</div>
			</section>
		</div>
	);
}
