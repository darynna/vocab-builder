const Loader = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6">
            <img
                src="/icons/logos/logo.svg"
                alt="VocabBuilder"
                className="h-10"
            />

            <div
                className="h-8 w-8 animate-spin rounded-full border-4 border-green-accent/20 border-t-green-accent"
                aria-label="Loading"
            />
        </div>
    );
};

export default Loader;