import rulesImage from '../assets/image-rules-bonus.svg'
import closeIcon from '../assets/icon-close.svg'

export default function Rules({setRulesState}) {
    function closeRules() {
        setRulesState(false);
    }
    return (
        <section className="absolute inset-0 bg-black/40
                            grid place-items-center">
            <div className='relative bg-white rounded-xl p-8'>
                <button className='absolute right-4 top-8'
                        onClick={closeRules}>
                    <img src={closeIcon} alt="" />
                </button>
                <h1 className=' font-bold text-4xl text-dark mb-2'>RULES</h1>
                <img src={rulesImage} alt="" />
            </div>
        </section>
    )
};


