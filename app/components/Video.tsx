import React from 'react'

type probs={
    url:string
    poster?:string
}

const Video = ({url, poster}:probs) => {
  return (
    <div className="flex justify-center w-full">
      <video


                        src={url}
                        className=" max-h-[50vh] rounded-xl object-contain handle-video"
                        muted
                        playsInline
                        controls
                        
                        poster={poster}
                        
                    />
    </div>
     
  )
}

export default Video
