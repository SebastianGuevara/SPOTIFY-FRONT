export type SearchBoxWidth = {
  width: string;
}
export type FilterStatus = 'Recent' | 'RecentAdded' | 'Alfabetically' | 'Creator';
export type ButtonsStatus = 'None' | 'playlist' | 'artist' | 'album';

export type Library ={
    filterStatus: 'Recent' | 'RecentAdded' | 'Alfabetically' | 'Creator',
    buttonsStatus: 'None' | 'Playlists' | 'Artists' | 'Albums'
} 

export type LibraryPlaylistSidebarType ={
  imgSrc: String | null,
  title: String ,
  subTitle: String,
  addedAt?: String
}