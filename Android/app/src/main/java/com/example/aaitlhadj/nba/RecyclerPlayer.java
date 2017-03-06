package com.example.aaitlhadj.nba;

/**
 * Created by aaitlhadj on 05/03/2017.
 */

import android.support.design.widget.Snackbar;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

public class RecyclerPlayer extends RecyclerView.Adapter<RecyclerPlayer.ViewHolder> {

    private String[] titles = {
            "Paul \nMillsap",
            "Isaiah Thomas",
            "Brook \nLopez",
            "Nicolas Batum",
            "Dwyane Wade",
            "LeBron James",
            "Dirk \nNowitzki",
            "Nikola \nJokic",
            "Andre Drummond",
            "Klay Thompson",
            "James Harden",
            "Paul \nGeorge",
            "Chris \nPaul",
            "Jordan Clarkson",
            "Mike \nConley",
            "Hassan Whiteside",
            "Giannis Antetokoumpo",
            "Karl-Anthony Towns",
            "Anthony Davis",
            "Carmelo Anthony",
            "Russell Westbrook",
            "Aaron Gordon",
            "Joel \nEmbiid",
            "Tyson Chandler",
            "Damian Lillard",
            "Tyreke \nEvans",
            "Kawhi Leonard",
            "Demar Derozan",
            "Rudy \nGobert",
            "John \nWall",};


    private int[] images = { R.drawable.img_millsap,
            R.drawable.img_thomas,
            R.drawable.img_lopez,
            R.drawable.img_batum,
            R.drawable.img_wade,
            R.drawable.img_james,
            R.drawable.img_nowitzki,
            R.drawable.img_jokic,
            R.drawable.img_drummond,
            R.drawable.img_thompson,
            R.drawable.img_harden,
            R.drawable.img_george,
            R.drawable.img_paul,
            R.drawable.img_clarkson,
            R.drawable.img_conley,
            R.drawable.img_whiteside,
            R.drawable.img_antentokunmpo,
            R.drawable.img_towns,
            R.drawable.img_davis,
            R.drawable.img_anthony,
            R.drawable.img_westbrook,
            R.drawable.img_gordon,
            R.drawable.img_embiid,
            R.drawable.img_chandler,
            R.drawable.img_lillard,
            R.drawable.img_evans,
            R.drawable.img_leonard,
            R.drawable.img_derozan,
            R.drawable.img_gobert,
            R.drawable.img_wall};


    class ViewHolder extends RecyclerView.ViewHolder{

        public int currentItem;
        public ImageView itemImage;
        public TextView itemTitle;

        public ViewHolder(View itemView) {
            super(itemView);
            itemImage = (ImageView)itemView.findViewById(R.id.item_image);
            itemTitle = (TextView)itemView.findViewById(R.id.item_title);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override public void onClick(View v) {
                    int position = getAdapterPosition();

                    Snackbar.make(v, "Click detected on item " + position,
                            Snackbar.LENGTH_LONG)
                            .setAction("Action", null).show();

                }
            });
        }
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.card_layout, viewGroup, false);
        ViewHolder viewHolder = new ViewHolder(v);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(ViewHolder viewHolder, int i) {
        viewHolder.itemTitle.setText(titles[i]);
        viewHolder.itemImage.setImageResource(images[i]);
    }

    @Override
    public int getItemCount() {
        return titles.length;
    }
}