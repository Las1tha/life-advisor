import'./AdviceCard.css';

const AdviceCard = ({advice, isGenerating, onGenerateAdvice, onReset}) => {
    return(
        <div className='advice-card'>
        <div className='advice-content'>
           {isGenerating ?(
            <div className='loading-state'>
                <div className='loading-spinner'></div>
                <p className='loading-text'>Generating terrible advice...</p>
                    
                </div>
           ): advice ? (
            <div className='advice-display animate-fade-in'>
                <div className='advice-icon'>📢</div>
                <blockquote className='advice-text'>
                    "{advice}"
                </blockquote>
                <div className='advice-disclaimer'>
                    <small> ⚠️ please don't actually  follow it</small>
                </div>
                </div>

           ):(
            <div className='empty-state'>
            <div className='empty-icon'>🫙</div>
             <p className='empty-text'>
                Ready to recive some terrible advice?
             </p>
                </div>
           )}
        </div>
       <div className="advice-actions">
                    <button
                        className='btn btn-primary generate-btn'
                        onClick={onGenerateAdvice}
                        disabled={isGenerating}
                        aria-label="Generate new advice"
                    >
                        {isGenerating ? (
                            <>
                            <span className='btn-spinner'></span>
                            Generating...
                            </>
                        ) : (
                            <>
                               <span className='btn-icon'>💎</span>
                               Give Me Terrible Advice!
                            </>
                        ) }
                    </button>
                    {advice && !isGenerating &&(
                        <button
                        className='btn btn-secondary reset-btn animate-slide-in'
                        onClick={onReset}
                        aria-label='Reset advice'
                        >
                        <span className='btn-icon'>🔄</span>
                        Try Again
                        </button>
                    )}
                </div>
        </div>
    )
}

export default AdviceCard;