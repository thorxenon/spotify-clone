"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

import { Song } from '@/types';
import { useUser } from '@/hooks/useUser';
import MediaItem from '@/components/MediaItem';
import LikeButton from '@/app/search/components/LikeButton';

interface LikedContentProps{
    songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if(!isLoading && !user){
        router.replace('/');
    }
  }, [isLoading, user, router]);

    return(
        <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
            {songs.map((song)=>(
                <div className="flex items-center gap-x-4 w-full " key={song.id}>
                    <div className="flex-1">
                        <MediaItem
                            onClick={()=>{}}
                            data={song}
                        />
                    </div>
                    <LikeButton
                        songId={song.id}
                    />
                </div>
            ))}
        </div>
    );
}

export default LikedContent