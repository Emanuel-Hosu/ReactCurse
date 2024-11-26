function TwitterFollowCard({name, username, isFollowing}) {
    return (
        <div className="relative flex py-2 p-4 w-[400px] h-auto text-neutral-300">
          <header className="flex flex-grow">
            <img className="rounded-full w-20 h-20" src={`https://unavatar.io/x/${username}`} alt="Avatar" />
            <div className="px-4 py-4">
              <strong className="text-neutral-200">{name}</strong>
              <span className="block">@{username}</span>
            </div>
          </header>

          <aside className="mt-5">
            <button className="bg-white px-4 py-2 rounded-full text-neutral-800">
              Seguir
            </button>
          </aside>
        </div>
    )
}

export default TwitterFollowCard;